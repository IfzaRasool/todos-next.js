const SIGN_IN = 'SIGN_IN';

const loginReducer = (state = [], action) => {
  switch (action.type) {
    case SIGN_IN:
      return [
        ...state,
        {
          email: action.email,
          password: action.password,
        },
      ];

    default:
      return state;
  }
};

export const signIn = (email, password) => ({
  type: SIGN_IN,
  email,
  password,
});

export default loginReducer;
