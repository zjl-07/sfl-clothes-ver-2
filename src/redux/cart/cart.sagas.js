import { takeLatest, put, all, call } from "redux-saga/effects";
import userActionType from "redux/user/user.types";
import { clearCartItem } from "./cart.action";

export function* clearCartOnLogout() {
  yield put(clearCartItem());
}

export function* onLogoutSuccess() {
  yield takeLatest(userActionType.LOGOUT_SUCCESS, clearCartOnLogout);
}

export function* cartSagas() {
  yield all([call(onLogoutSuccess)]);
}
