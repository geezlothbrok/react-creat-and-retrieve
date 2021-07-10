import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import {useState} from 'react';
import { logout } from '../actions/authAction';
import { connect } from 'react-redux';


function Dashboard(props) {

  const [users, setUsers]= useState([]);

  function addUser (user) {
    setUsers([...users, user]);  
  }

  function handleLogout() {
    props.logout();
  }


  return (
    <div>
      <div className='container'>
        
          <div className='col-md-6'>
            <UserForm  addUser={addUser}/>
          </div>
          <button type= 'button' onClick={handleLogout}>Logout</button>
        
          <div className='col-md-6'>
            <UserList allUsers={users} />
          </div>
      </div>
    </div>
    

  );
}
const mapDispatchToProps = { logout };

export default connect(null, mapDispatchToProps) (Dashboard);
