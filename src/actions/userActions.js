export function getAllUsers() {
  return (dispatch, state, { getFirestore }) => {
    const db = getFirestore();
    db.collection("users")
      .get()
      .then((results) => {
        let users = [];
        results.forEach((doc) => {
          users.push(doc.data());
        });

        dispatch({
          type: "ADD_ALL_USERS",
          payload: users,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function addNewUser(user) {
  return (dispatch, state, { getFirestore }) => {
    const db = getFirestore();
    db.collection('users')
      .add(user)
      .then(() => {
        
        dispatch({
          type: 'ADD_USER',
          payload: user,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function editUser(id, upadtedUser) {
  return {
    type: "EDIT_USER",
    payload: { id: id, upadtedUserInfo: upadtedUser },
  };
}

export function deleteUser(id) {
  return {
    type: "DELETE_USER",
    payload: id,
  };
}
