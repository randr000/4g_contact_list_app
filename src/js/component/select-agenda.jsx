import React, { useContext, useEffect } from 'react';
import { AppContext } from './AppContext.jsx';
import { fetchAgendas } from '../async-functions.js';

const SelectAgenda = () => {

    const {store, dispatch} = useContext(AppContext);
    const {agendas} = store;

    useEffect(() => {

        // fetchAgendas().then(res => console.log(res));
        fetchAgendas().then(res => dispatch({type: 'fetchAgendas', payload: res}));

    }, [agendas]);

    return (
        <select className="form-select form-select-lg mb-3 w-25" aria-label=".form-select-lg example">
            <option>Select Agenda</option>
            {agendas.map((agenda, i)=> <option key={i} value={agenda}>{agenda}</option>)}
            {/* <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option> */}
        </select>
    );
};

export default SelectAgenda;