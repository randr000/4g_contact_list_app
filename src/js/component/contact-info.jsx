import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhoneFlip, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactInfo = () => {

    return (
        <div className='d-flex flex-column ms-5'>
            <h2 className='display-5'>Raul Andrial</h2>
            <p className='text-secondary fs-3' role='button'><FontAwesomeIcon icon={faLocationDot} /> <span className='fw-bold'>1234 SE 1st St</span></p>
            <p className='text-secondary fs-5' role='button'><FontAwesomeIcon icon={faPhoneFlip} /> <span>(999) 999-9999</span></p>
            <p className='text-secondary fs-5' role='button'><FontAwesomeIcon icon={faEnvelope} /> <span>rauljandrial@gmail.com</span></p>
        </div>
    );
};

export default ContactInfo;