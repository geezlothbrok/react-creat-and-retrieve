

import UserForm from '../components/UserForm';
import UserList from '../components/UserList'
import {useState} from 'react';

function Dashboard() {

  const [users, setUsers]= useState([]);

  function addUser (user) {
    setUsers([...users, user]);  
  }

  


  return (
    <div>
      <div className='container'>
        
          <div className='col-md-6'>
            <UserForm  addUser={addUser}/>
          </div>
        
          <div className='col-md-6'>
            <UserList allUsers={users} />
          </div>
      </div>
    </div>
    

  );
}

export default Dashboard;
