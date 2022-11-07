import React, { useContext } from 'react';
import { AppContext } from './AppContext.jsx';

const AddContactBtn = () => {

    const {dispatch} = useContext(AppContext);

    return (
        <button
            className='btn btn-success align-self-end'
            onClick={e => dispatch({type: 'showAddUserForm', payload: true})}
        >
            Add new contact
        </button>
    );
};

export default AddContactBtn;