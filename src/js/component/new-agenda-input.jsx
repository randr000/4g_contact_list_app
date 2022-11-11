import React, { useContext} from 'react';
import { AppContext } from './AppContext.jsx';

const NewAgendaInput = () => {

    const {store, dispatch} = useContext(AppContext);
    const {selectedAgenda, showNewAgendaInput} = store;

    return <input
                type='text'
                className='w-25 form-control fs-5 ms-2 mb-3'
                onChange={e => dispatch({type: 'selectAgenda', payload: e.target.value})}
                defaultValue={selectedAgenda === 'select' || showNewAgendaInput ? '' : selectedAgenda}
                autoFocus
            />;
};

export default NewAgendaInput;