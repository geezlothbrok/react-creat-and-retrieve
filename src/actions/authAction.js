export function signup (email, password) {
    return async ( dispatch, state, {getFirebase}) => {
        const firebase = getFirebase();
        try {
            const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error);
        }
    }
}

export function login (email, password) {
    return async (dispatch, state, {getFirebase}) => {
        const firebase = getFirebase();
        try {
            const usercredential = await firebase.auth.sihnInWithEmailAndPassword(email, password);
        } catch (error) {
         console.log(error);   
        }
    }
}