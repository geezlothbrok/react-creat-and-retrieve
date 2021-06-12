import usersReducer from "../reducers/usersReducer";
import { createStore, compose, applyMiddleware } from 'redux';
import {getFirebase, reduxReactFirebase} from 'react-redux-firebase';
import {getFirestore, reduxFirestore} from 'redux-firestore';
import firebase from '../firebase/config';
import thunk from 'redux-thunk';

const store = createStore(usersReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})), reduxReactFirebase(firebase), reduxFirestore(firebase)));

export default store;