import React, { useContext } from 'react';
import { AppContext } from './AppContext.jsx';

const AddContactBtn = () => {

    const {dispatch} = useContext(AppContext);

    return (
        <button
            className='btn btn-success my-3'
            onClick={e => dispatch({type: 'showAddUserForm', payload: true})}
        >
            Add new contact
        </button>
    );
};

export default AddContactBtn;