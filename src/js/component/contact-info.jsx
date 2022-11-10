import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhoneFlip, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactInfo = ({contact}) => {

    const {full_name, address, phone, email} = contact;

    function formatPhoneNum(phoneNum) {
        phoneNum = phoneNum.replace(/\D/g, '');
        return `(${phoneNum.slice(0, 3)}) ${phoneNum.slice(3, 6)}-${phoneNum.slice(6, 10)}`;
    }

    return (
        <div className='d-flex flex-column ms-5'>
            <h2 className='display-5'>{full_name}</h2>
            <p className='text-secondary fs-3' role='button'><FontAwesomeIcon icon={faLocationDot} /> <span className='fw-bold'>{address}</span></p>
            <p className='text-secondary fs-5' role='button'><FontAwesomeIcon icon={faPhoneFlip} /> <span>{formatPhoneNum(phone)}</span></p>
            <p className='text-secondary fs-5' role='button'><FontAwesomeIcon icon={faEnvelope} /> <span>{email}</span></p>
        </div>
    );
};

export default ContactInfo;