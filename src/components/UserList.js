import react from 'react'
import UserItems from './UserItems';
import { connect } from 'react-redux';



function UserList(props) {
    return(
        <div>
            {props.usersData.map((user) => (
                <UserItems user={user} delete={props.delete}
                updateUser = {props.updateUser}/>
            ))}
        </div>
    )
}
function mapStateToProps (state) {
    return {usersData:state.users}
}

export default connect(mapStateToProps, {})(UserList);