import React, { useContext } from 'react';
import { AppContext } from './AppContext.jsx';

const DisplayAgenda = () => {

    const {store} = useContext(AppContext);
    const {selectedAgenda} = store;

    
    if (selectedAgenda !=='select') {
        return <p className='w-25 fs-5 form-control ms-2 mb-3'>{selectedAgenda}</p>
    } else return null;
};

export default DisplayAgenda;