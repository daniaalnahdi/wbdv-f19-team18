const initialState = {
  user: ''
};

const LoginPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.user
      };
    default:
      return state;
  }
};

export default LoginPageReducer;
