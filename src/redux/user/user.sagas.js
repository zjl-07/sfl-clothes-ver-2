import { takeLatest, put, all, call } from "redux-saga/effects";
import ActionType from "redux/user/user.types";
import {
  loginSuccess,
  loginFailure,
  logoutFailure,
  logoutSuccess,
  registerFailure,
  registerSuccess
} from "./user.action";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser
} from "firebase/firebase.utils";

export function* createUserSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(loginSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (err) {
    yield put(loginFailure(err));
  }
}

export function* loginWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield createUserSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(loginFailure(err));
  }
}

export function* loginWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield createUserSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(loginFailure(err));
  }
}

export function* isUserAuthenticated() {
  try {
    const UserAuth = yield getCurrentUser();
    if (!UserAuth) return;
    yield createUserSnapshotFromUserAuth(UserAuth);
  } catch (err) {
    yield put(loginFailure(err));
  }
}

export function* checkUserAuthentication() {
  yield takeLatest(ActionType.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* Logout() {
  try {
    yield auth.signOut();
    yield put(logoutSuccess());
  } catch (err) {
    yield put(logoutFailure(err));
  }
}

export function* registerWithEmail({
  payload: { displayName, password, email }
}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(registerSuccess({ user, additionalData: { displayName } }));
  } catch (err) {
    yield put(registerFailure(err));
  }
}

export function* loginAfterRegister({ payload: { user, additionalData } }) {
  yield createUserSnapshotFromUserAuth(user, additionalData);
}

export function* onGoogleloginStart() {
  yield takeLatest(ActionType.GOOGLE_LOGIN_START, loginWithGoogle);
}

export function* onEmailLoginStart() {
  yield takeLatest(ActionType.EMAIL_LOGIN_START, loginWithEmail);
}

export function* onLogoutStart() {
  yield takeLatest(ActionType.LOGOUT_START, Logout);
}

export function* onRegisterStart() {
  yield takeLatest(ActionType.REGISTER_START, registerWithEmail);
}

export function* onRegisterSuccess() {
  yield takeLatest(ActionType.REGISTER_SUCCESS, loginAfterRegister);
}

export function* userSagas() {
  yield all([
    call(onGoogleloginStart),
    call(onEmailLoginStart),
    call(checkUserAuthentication),
    call(onLogoutStart),
    call(onRegisterStart),
    call(onRegisterSuccess)
  ]);
}
