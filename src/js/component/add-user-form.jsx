import React, { useContext } from 'react';
import { AppContext } from './AppContext.jsx';

const AddUserForm = () => {

    const {dispatch} = useContext(AppContext);

    function handleSubmit() {
        return;
    }

    return (
        <>
            <h1 className="fw-bold display-5 text-center my-5">Add a new Contact</h1>
            <form onSubmit={handleSubmit} className="d-flex flex-column mx-auto w-75">
                <div className="mb-3 fw-bold fs-5">
                    <label htmlFor="full-name" className="form-label">Full Name</label>
                    <input type="text" className="form-control fs-5" id="full-name" placeholder="Full Name" required/>
                </div>
                <div className="mb-3 fw-bold fs-5">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control fs-5" id="email" placeholder="Enter email" required/>
                </div>
                <div className="mb-3 fw-bold fs-5">
                    <label htmlFor="tel-num" className="form-label">Phone</label>
                    <input type="tel" pattern="\([0-9]{3}\[0-9]{3}-[0-9]{4})" className="form-control fs-5" id="tel-num" placeholder="Enter phone" required/>
                </div>
                <div className="mb-3 fw-bold fs-5">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control fs-5" id="address" placeholder="Enter address" required/>
                </div>
                <button type="submit" className="btn btn-primary fs-5">save</button>
                <a href="#" className="link-primary fs-5" onClick={e => dispatch({type: 'showAddUserForm', payload: false})}>or get back to contacts</a>
            </form>
        </>
    );
};

export default AddUserForm;