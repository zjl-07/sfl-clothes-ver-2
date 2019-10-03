import ActionType from "redux/user/user.types";

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: undefined
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: null
      };
    case ActionType.LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        errorMessage: null
      };
    case ActionType.LOGIN_FAILURE:
    case ActionType.LOGOUT_FAILURE:
    case ActionType.REGISTER_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};
