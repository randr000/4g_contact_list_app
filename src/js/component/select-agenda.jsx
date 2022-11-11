import React, { useContext, useEffect } from 'react';
import { AppContext } from './AppContext.jsx';
import { fetchAgendas, fetchContacts } from '../async-functions.js';

const SelectAgenda = () => {

    const {store, dispatch} = useContext(AppContext);
    const {agendas, selectedAgenda} = store;

    useEffect(() => {

        fetchAgendas().then(res => dispatch({type: 'fetchAgendas', payload: res}));

    }, [agendas]);

    useEffect(() => {

        if (selectedAgenda) fetchContacts(selectedAgenda).then(res => dispatch({type: 'fetchContacts', payload: res}));

    }, [selectedAgenda]);

    function handleSelect(event) {
        if (event.target.value === 'new') {
            dispatch({type: 'showNewAgendaInput', payload: true});
            dispatch({type: 'resetContacts'});

        } else {

            dispatch({type: 'selectAgenda', payload: event.target.value});
            dispatch({type: 'showNewAgendaInput', payload: false});

        }
    }
    
    return (

        <select className="form-select form-select-lg mb-3 w-25" aria-label=".form-select-lg example" onChange={handleSelect}>
            <option value='select'>Select Agenda</option>
            <option value='new'>Create New Agenda</option>
            <option disabled="disabled">------------------------</option>
            {agendas.map((agenda) => <option key={agenda} value={agenda}>{agenda}</option>)}
        </select>
  
    );
};

export default SelectAgenda;