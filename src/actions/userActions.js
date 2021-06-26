export function getAllUsers() {
  return (dispatch, state, { getFirestore }) => {
    const db = getFirestore();
    db.collection("users").onSnapshot((results) => {
        let users = [];
        results.forEach((doc) => {
          let user = doc.data();
          user.id = doc.id;
          users.push(user);
        });

        dispatch({
          type: "ADD_ALL_USERS",
          payload: users,
        });
      },
      (err) => {
        console.log(err);
      }
      );
      
  };
}

export function addNewUser(user) {
  return async (dispatch, state, { getFirestore }) => {
    const db = getFirestore();
    try {
      await db.collection('users').add(user);
    } catch (err) {
      console.log(err);
    }
  };
}

export function editUser(id, upadtedUser) {
  return async ( dispatch, state, { getFirestore }) => {
    let db = getFirestore();
    try {
      await db.collection('users').doc(id).update(upadtedUser);
    } catch (error) {
      console.log(error);
    }
  }
}

export function deleteUser(id) {
  return async ( dispatch, state, { getFirestore }) => {
    let db = getFirestore();
    try {
      await db.collection('users').doc(id).delete();
    } catch (error) {
      console.log(error);
    }
  }
}
