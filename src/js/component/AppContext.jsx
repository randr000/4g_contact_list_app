import React, { useReducer } from 'react';

export const AppContext = React.createContext(null);

export const ContextWrapper = ({children}) => {

    const defaultState = {
        contacts: [],
        agendas: [],
        selectedAgenda: 'select',
        showAddContactForm: false,
        showDeleteContactModal: false,
        showNewAgendaInput: false
    };

    const [store, dispatch] = useReducer(reducer, defaultState);

    function reducer(state, action) {
        switch (action.type) {
            case 'showAddContactForm':
                return {...state, showAddContactForm: action.payload};
            case 'showDeleteContactModal':
                return {...state, showDeleteContactModal: action.payload};
            case 'fetchAgendas':
                return {...state, agendas: action.payload};
            case 'fetchContacts':
                return {...state, contacts: action.payload};
            case 'showNewAgendaInput':
                return {...state, showNewAgendaInput: action.payload};
            case 'selectAgenda':
                return {...state, selectedAgenda: action.payload};
            default:
                throw new Error(`Case ${action.type} not found in reducer function.`);
        }
    }

    return (
        <AppContext.Provider value={{store, dispatch}}>
            {children}
        </AppContext.Provider>
    );
};