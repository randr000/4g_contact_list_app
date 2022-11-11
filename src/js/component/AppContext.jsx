import React, { useReducer } from 'react';

export const AppContext = React.createContext(null);

export const ContextWrapper = ({children}) => {

    const defaultState = {
        contacts: [],
        contact: {},
        agendas: [],
        selectedAgenda: 'select',
        showAddContactForm: false,
        showDeleteContactModal: false,
        showNewAgendaInput: false,
        showEditContact: false
    };

    const [store, dispatch] = useReducer(reducer, defaultState);

    function reducer(state, action) {
        switch (action.type) {
            case 'showAddContactForm':
                return {...state, ...action.payload};
            case 'showDeleteContactModal':
                return {...state, showDeleteContactModal: action.payload.show, contact: action.payload.contact};
            case 'fetchAgendas':
                return {...state, agendas: action.payload};
            case 'fetchContacts':
                return {...state, contacts: action.payload};
            case 'resetContacts':
                return {...state, contacts: defaultState.contacts};
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