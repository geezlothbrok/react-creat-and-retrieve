import React from 'react'


function UserItems(props) {
    return (
        <div>
            <div className='row'>
                <div className='col-md-3'>{props.user.username}</div>
                <div className='col-md-3'>{props.user.email}</div>
                <div className='col-md-2'>{props.user.country}</div>
                <div className='col-md-4'>
                    <  button className='del' 
                    onClick={() => {
                        props.delete(props.user.id);
                    }}> Delete</button>
                    <button className='up'>Update</button>
                </div>
            </div>
        </div>
    )
};

export default UserItems;