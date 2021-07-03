import React, { useEffect } from 'react'
import UserItems from './UserItems';
import { connect } from 'react-redux';
import { getAllUsers} from '../actions/userActions';



function UserList(props) {
    useEffect(() => {
        props.getAllUsers();
    }, []);

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
    return {usersData: state.userState.users,};
}

const mapDispatchToProps = {
    getAllUsers,
  };

export default connect(mapStateToProps, mapDispatchToProps)(UserList);