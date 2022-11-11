import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from './AppContext.jsx';
import { createContact, updateContact, fetchContacts } from '../async-functions.js';

const AddContactForm = () => {

    const {store, dispatch} = useContext(AppContext);
    const {showEditContact, contact, selectedAgenda} = store;
    const [contactForm, setContactForm] = useState({});
    
    function handleSubmit() {

        showEditContact ?
        updateContact() :

        createContact({
            full_name: contactForm.full_name,
            email: contactForm.email,
            agenda_slug: selectedAgenda,
            address: contactForm.address,
            phone: contactForm.phone
        }).then(res => res.ok ? fetchContacts(selectedAgenda) : null)
        .then(res => dispatch({type: 'showAddContactForm', payload: {showAddContactForm: false}}));
    }

    return (
        <>
            <h1 className="fw-bold display-5 text-center my-5">{showEditContact ? 'Edit' : 'Add a new'} Contact</h1>
            <form onSubmit={handleSubmit} className="d-flex flex-column mx-auto w-75">

                <div className="mb-3 fw-bold fs-5">
                    <label htmlFor="full-name" className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control fs-5"
                        id="full-name"
                        placeholder="Full Name"
                        defaultValue={showEditContact ? contact.full_name : ''}
                        onChange={e => setContactForm({...contactForm, full_name: e.target.value})}
                        required
                    />
                </div>

                <div className="mb-3 fw-bold fs-5">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control fs-5"
                        id="email"
                        placeholder="Enter email"
                        defaultValue={showEditContact ? contact.email : ''}
                        onChange={e => setContactForm({...contactForm, email: e.target.value})}
                        required
                    />
                </div>

                <div className="mb-3 fw-bold fs-5">
                    <label htmlFor="tel-num" className="form-label">Phone</label>
                    <input
                        type="tel"
                        pattern="[0-9]{10}"
                        className="form-control fs-5"
                        id="tel-num"
                        placeholder="Enter phone"
                        defaultValue={showEditContact ? contact.phone : ''}
                        onChange={e => setContactForm({...contactForm, phone: e.target.value})}
                        required
                    />
                </div>

                <div className="mb-3 fw-bold fs-5">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control fs-5"
                        id="address"
                        placeholder="Enter address"
                        defaultValue={showEditContact ? contact.address : ''}
                        onChange={e => setContactForm({...contactForm, address: e.target.value})}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary fs-5">save</button>

                <a
                    href="#"
                    className="link-primary fs-5"
                    onClick={e => dispatch({type: 'showAddContactForm', payload: {showAddContactForm: false}})}
                >
                    or get back to contacts
                </a>
            
            </form>
        </>
    );
};

export default AddContactForm;