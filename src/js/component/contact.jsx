import React, { useContext } from 'react';
import ContactImg from './contact-img.jsx';
import ContactInfo from './contact-info.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from './AppContext.jsx';

const Contact = ({contact}) => {

    const { dispatch } = useContext(AppContext);
    
    return (
        <li className='list-group-item d-flex justify-content-between'>
            <div className='d-flex mx-4 my-2'>
                <ContactImg />
                <ContactInfo contact={contact} />
            </div>
            <div className='d-flex'>
                    <FontAwesomeIcon className="mx-5 my-4 fs-2" role="button" icon={faPencil} />
                    <FontAwesomeIcon className="mx-5 my-4 fs-2" role="button" onClick={e => dispatch({type: 'showDeleteContactModal', payload: {show: true, contactId: contact.id}})} icon={faTrashCan} />
            </div>
        </li>
    );
};

export default Contact;