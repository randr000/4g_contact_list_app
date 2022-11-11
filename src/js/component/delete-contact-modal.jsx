import React, { useContext,  useEffect } from 'react';
import { AppContext } from './AppContext.jsx';
import { fetchContacts, deleteContact } from '../async-functions.js';

const DeleteContactModal = () => {
    
    const {store, dispatch} = useContext(AppContext);
    const { contactId, selectedAgenda} = store;


    function toggleModal(deleteUser) {
        
        if (deleteUser) {
            deleteContact(contactId).then(res => res.ok ? 
                fetchContacts(selectedAgenda).then(res => dispatch({type: 'fetchContacts', payload: res})) : 
                null);
        };

        dispatch({type: 'showDeleteContactModal', payload: {show: false, contactId: ''}});
    }

    return (
       
        <div onClick={e => toggleModal(false)} style={{backgroundColor: "rgb(0, 0, 0, .5)", width: "100%", height: "100%", zIndex: 1, position: "fixed"}}>
            <div onClick={e => e.stopPropagation()} className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Are you sure?</h5>
                        <button type="button" onClick={e => toggleModal(false)} className="btn-close"></button>
                    </div>
                    <div className="modal-body">
                        <p>{`Are you sure you want to delete contact?`}</p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={e => toggleModal(false)} className="btn btn-primary">Oh no!</button>
                        <button onClick={e => toggleModal(true)} className="btn btn-secondary">Yes baby!</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DeleteContactModal;