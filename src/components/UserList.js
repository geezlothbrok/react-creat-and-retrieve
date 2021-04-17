import react from 'react'
import UserItems from './UserItems';



function UserList(props) {
    return(
        <div>
            {props.allUsers.map((user) => (
                <UserItems user={user} delete={props.delete}/>
            ))}
        </div>
    )
}

export default UserList;