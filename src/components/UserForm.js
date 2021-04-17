import React, {useState} from 'react';



function UserForm(props) {

    const [state, setState] = useState({
        username: '',
        email: '',
        country: '',
        password: '',
    });


    function handleOnchange (event) {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit () {
        props.addUser(state);

        let userId = 10000 + Math.random() * 1000000;
        let user = { ...state, id: userId};
        props.addUser(user);
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

export default UserForm;