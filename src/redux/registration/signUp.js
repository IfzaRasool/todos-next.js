const ADD_FORM = 'ADD_FORM';
const SIGN_IN = 'SIGN_IN';
const BASE_URL = 'https://62daa1d2d1d97b9e0c4335d6.mockapi.io/todo/signup';



const formReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FORM:
      return [
        ...state,
        {
          id: action.id,
          firstName: action.firstName,
          lastName: action.lastName,
          email: action.email,
          password: action.password,
        },
      ];
      
    default:
      return state;
  }
};

export const additem = (id, firstName, lastName, email, password) => ({
  type: ADD_FORM,
  id,
  firstName,
  lastName,
  email,
  password,
});

export const addForm =
  (id, firstName, lastName, email, password) => async (dispatch) => {
    const result = await fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify({
        id,
        firstName,
        lastName,
        email,
        password,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (result) {
      dispatch(additem(id, firstName, lastName, email, password));
    }
  };


export async function fetchData(dispatch) {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  data.forEach((e) => dispatch(additem(e.id, e.firstName, e.lastName, e.email, e.password)));
}

export default formReducer;
