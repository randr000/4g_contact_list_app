import React, { useContext } from 'react';
import { AppContext } from './AppContext.jsx';

const NewAgendaInput = () => {

    const {dispatch} = useContext(AppContext);


    return <input
                type='text'
                className='w-25 form-control fs-5 ms-2 mb-3'
                onChange={e => dispatch({type: 'selectAgenda', payload: e.target.value})}
                autoFocus
            />;
};

export default NewAgendaInput;