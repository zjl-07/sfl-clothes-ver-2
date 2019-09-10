import ActionType from "redux/user/user.types";

export const setCurrentUser = user => ({
  type: ActionType.SET_CURRENT_USER,
  payload: user
});
