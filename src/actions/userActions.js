

 export  function addNewUser (user) {
    return {
        type: 'ADD_USER',
        payload: user,
    }
}

export  function editUser (id, upadtedUser) {
    return {
        type: 'EDIT_USER',
        payload: { id: id, upadtedUserInfo: upadtedUser },
    }
}

export function deleteUser (id) {
    return {
        type: 'DELETE_USER',
        payload: id
    }
}