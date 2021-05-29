import React, {useState} from 'react';
import { connect } from 'react-redux';
import {editUser} from '../actions/userActions';



function EditUserForm(props) {

    const [state, setState] = useState({
        username: props.user.username,
        email: props.user.email,
        country: props.user.country,
        password: props.user.password,
    });


    function handleOnchange (event) {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit () {

        
        let user = { ...state, id: props.user.id };
        props.editUser(props.user.id, user);
        props.hideModal();
    }
    
    return (
        <div className='forms'>
            <form>
                <div>
                    <label>Username:</label>
                    <br></br>
                    <input type='text' name='username'  value={state.username} onChange={handleOnchange}></input>
                </div><hr></hr>

                <div>
                    <label>Email:</label>
                    <br></br>
                    <input type='text' name='email' value={state.email} onChange={handleOnchange}></input>
                </div><hr></hr>

                <div>
                    <label>Country:</label>
                    <br></br>
                    <input type='text' name='country' value={state.country} onChange={handleOnchange}></input>
                </div><hr></hr>

                <div>
                    <label>Password:</label>
                    <br></br>
                    <input type='password' name='password' value={state.password} onChange={handleOnchange}></input>
                </div><hr></hr>

                <div>
                <br></br>
                    <button type='button' onClick={handleSubmit} className='formButton'>Submit</button>
                </div>
            </form>
        </div>
    )
};

let mapDispatchToProps = {
    editUser,
};

let mapStateToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps) (EditUserForm);