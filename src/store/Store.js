import usersReducer from "../reducers/usersReducer";
import {createStore} from 'redux';

export const store = createStore (usersReducer)