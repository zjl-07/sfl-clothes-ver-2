import ActionType from "redux/user/user.types";

export const googleLoginStart = () => ({
  type: ActionType.GOOGLE_LOGIN_START
});

export const emailLoginStart = emailAndPassword => ({
  type: ActionType.EMAIL_LOGIN_START,
  payload: emailAndPassword
});

export const loginSuccess = currentUser => ({
  type: ActionType.LOGIN_SUCCESS,
  payload: currentUser
});

export const loginFailure = errorMessage => ({
  type: ActionType.LOGIN_FAILURE,
  payload: errorMessage
});

export const checkUserAuthentication = () => ({
  type: ActionType.CHECK_USER_SESSION
});

export const logoutStart = () => ({
  type: ActionType.LOGOUT_START
});

export const logoutSuccess = () => ({
  type: ActionType.LOGOUT_SUCCESS
});

export const logoutFailure = errorMessage => ({
  type: ActionType.LOGOUT_FAILURE,
  payload: errorMessage
});

export const registerStart = userData => ({
  type: ActionType.REGISTER_START,
  payload: userData
});

export const registerSuccess = ({ user, additionalData }) => ({
  type: ActionType.REGISTER_SUCCESS,
  payload: { user, additionalData }
});

export const registerFailure = errorMessage => ({
  type: ActionType.REGISTER_FAILURE,
  payload: errorMessage
});
