import React, { useReducer } from 'react';

export const AppContext = React.createContext(null);

export const ContextWrapper = ({children}) => {

    const defaultState = {
        contacts: [],
        agendas: [],
        selectedAgenda: '',
        showAddUserForm: false,
        showDeleteUserModal: false,
        showNewUserInput: false
    };

    const [store, dispatch] = useReducer(reducer, defaultState);

    function reducer(state, action) {
        switch (action.type) {
            case 'showAddUserForm':
                return {...state, showAddUserForm: action.payload};
            case 'showDeleteUserModal':
                return {...state, showDeleteUserModal: action.payload};
            case 'fetchAgendas':
                return {...state, agendas: action.payload};
            case 'showNewUserInput':
                return {...state, showNewUserInput: action.payload};
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