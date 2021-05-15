const initialState = {
    users: [{name: 'Gideon', userID: '234567fg' , gender: 'Male'}]
};

const usersReducer = (state = 'initialState', action) => {
    switch (action.type) {
        case "ADD_USER":
            
            break;
    
        default:
            return state;
    }

};

export default usersReducer;