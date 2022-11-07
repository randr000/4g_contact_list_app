import React, { useContext } from 'react';
import contactImg from '../../img/me.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhoneFlip, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from './AppContext.jsx';

const Contact = () => {

    const imgMaxDim = '225px';
    const { dispatch } = useContext(AppContext);

    return (
        <li className='list-group-item d-flex justify-content-between'>
            <div className='d-flex mx-4 my-2'>
                <img
                    src={contactImg}
                    alt='Contact Imgage'
                    className='img-fluid rounded-circle'
                    style={{maxHeight: imgMaxDim, maxWidth: imgMaxDim}}
                />
                <div className='d-flex flex-column ms-5'>
                    <h2 className='display-5'>Raul Andrial</h2>
                    <p className='text-secondary fs-3' role='button'><FontAwesomeIcon icon={faLocationDot} /> <span className='fw-bold'>1234 SE 1st St</span></p>
                    <p className='text-secondary fs-5' role='button'><FontAwesomeIcon icon={faPhoneFlip} /> <span>(999) 999-9999</span></p>
                    <p className='text-secondary fs-5' role='button'><FontAwesomeIcon icon={faEnvelope} /> <span>rauljandrial@gmail.com</span></p>
                </div>
            </div>
            <div className='d-flex'>
                    <FontAwesomeIcon className="mx-5 my-4 fs-2" role="button" icon={faPencil} />
                    <FontAwesomeIcon className="mx-5 my-4 fs-2" role="button" onClick={e => dispatch({type: 'showDeleteUserModal', payload: true})} icon={faTrashCan} />
            </div>
        </li>
    );
};

export default Contact;