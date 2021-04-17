import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
//import UserItems from './components/UserItems';
import UserList from './components/UserList';
import {useState} from 'react';

function App() {

  const [users, setUsers]= useState([]);

  function addUser (user) {
    setUsers([...users, user]);  
  }

  function deleteUser(id) {
    let newUsers=users.filter((user) => user.id !==id);
    setUsers(newUsers);
  }
  return (
    <div>
      <div className='container'>
        
          <div className='col-md-6'>
            <UserForm  addUser={addUser}/>
          </div>
        
          <div className='col-md-6'>
            <UserList allUsers={users} delete={deleteUser}/>
          </div>
      </div>
    </div>
    

  );
}

export default App;
