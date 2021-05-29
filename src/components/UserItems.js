import React,{useState} from 'react'
import {Modal} from 'react-bootstrap';
import EditUserForm from './EditUserForm';
import { connect } from 'react-redux';
import { deleteUser } from '../actions/userActions';



function UserItems(props) {
    const [isModalVisible, setShowModal] =useState(false);

    function showModal() {
        setShowModal(true);
    }

    function hideModal() {
        setShowModal(false);
    }
    return (
        <div>
            <div className='row'>
                <div className='col-md-3'>{props.user.username}</div>
                <div className='col-md-3'>{props.user.email}</div>
                <div className='col-md-2'>{props.user.country}</div>
                <div className='col-md-4'>
                    <  button className='del' 
                    onClick={() => {
                        props.deleteUser(props.user.id);
                    }}> Delete</button>



                    <button className='up' onClick={showModal}>Edit</button>

                    <Modal show={isModalVisible} onHide={hideModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit User</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <EditUserForm 
                            user = {props.user}
                            
                            hideModal={hideModal}/>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </div>
    )
};

let mapDispatchToProps = {
    deleteUser
};

let mapStateToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps) (UserItems);