const initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            console.log(action.payload)
           return { ...state,users: [...state.users, action.payload]};
            
        case 'EDIT_USER' :
            var id = action.payload.id;
            let updatedUserInfo = action.payload.upadtedUserInfo
            let UsersAfterUpdate = state.users.map((user) => {
                if (user.id === id) {
                  return updatedUserInfo;
                }
                return user;
              });
                return { users: UsersAfterUpdate };  

        case 'DELETE_USER' :
            var id = action.payload;
            let usersAfterDelete=state.users.filter((user) => user.id !==id);
            return { users: usersAfterDelete };

    
        default:
            return state;
    }

};


export default usersReducer;