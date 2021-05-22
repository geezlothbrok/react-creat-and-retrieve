import usersReducer from "../reducers/usersReducer";

 export default function addNewUser (user) {
    return {
        type: 'ADD_USER',
        payload: user,
    }
}