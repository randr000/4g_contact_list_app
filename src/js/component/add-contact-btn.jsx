import React, { useContext } from 'react';
import { AppContext } from './AppContext.jsx';

const AddContactBtn = () => {

    const {dispatch} = useContext(AppContext);

    function handleClick() {
        dispatch({type: 'showAddContactForm', payload: {showAddContactForm: true, showEditContact: false, contact: {}}});
    }

    return (
        <button
            className='btn btn-success my-3 ms-auto'
            onClick={handleClick}
        >
            Add new contact
        </button>
    );
};

export default AddContactBtn;