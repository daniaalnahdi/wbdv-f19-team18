const initialState = {
  user: null
};

const RegisterPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER":
        return {
          user: action.user
        };
    case "CREATE_ADMIN":
      return {
        user: action.user
      };
    default:
      return state;
  }
};

export default LoginPageReducer;
