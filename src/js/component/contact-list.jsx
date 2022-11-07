import React from 'react';
import Contact from './contact.jsx'

const ContactList = () => {

    return (
        <ul className='list-group mt-3'>
            <Contact />
            <Contact />
            <Contact />
        </ul>
    );
};

export default ContactList;