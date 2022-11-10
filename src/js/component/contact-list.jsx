import React, { useContext } from 'react';
import Contact from './contact.jsx'
import { AppContext } from './AppContext.jsx';

const ContactList = () => {

    const {store} = useContext(AppContext);
    const {contacts} = store;

    return (
        <ul className='list-group mt-3'>
            {contacts.map(contact => <Contact key={contact.id} contact={contact} />)}
        </ul>
    );
};

export default ContactList;