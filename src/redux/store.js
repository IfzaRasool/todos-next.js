import { configureStore } from "@reduxjs/toolkit";
import formReducer from '../redux/registration/signUp';
import todoSlice from '../redux/todos/todoList';
import loginReducer from "./Login/login";



const store = configureStore({
  reducer: {
    todo: todoSlice,
    form: formReducer,
    login: loginReducer,
  },
});

export default store;


