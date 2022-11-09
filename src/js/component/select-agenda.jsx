import React, { useContext, useEffect } from 'react';
import { AppContext } from './AppContext.jsx';
import { fetchAgendas } from '../async-functions.js';

const SelectAgenda = () => {

    const {store, dispatch} = useContext(AppContext);
    const {agendas} = store;

    useEffect(() => {

        fetchAgendas().then(res => dispatch({type: 'fetchAgendas', payload: res}));

    }, [agendas]);

    function handleSelect(event) {
        if (event.target.value === 'new') {
            dispatch({type: 'showNewUserInput', payload: true});

        } else {

            dispatch({type: 'selectAgenda', payload: event.target.value});
            dispatch({type: 'showNewUserInput', payload: false});

        }
    }

    return (

        <select className="form-select form-select-lg mb-3 w-25" aria-label=".form-select-lg example" onChange={handleSelect}>
            <option>Select Agenda</option>
            <option value='new'>Create New Agenda</option>
            <option disabled="disabled">------------------------</option>
            {agendas.map((agenda, i)=> <option key={i} value={agenda}>{agenda}</option>)}
        </select>
  
    );
};

export default SelectAgenda;