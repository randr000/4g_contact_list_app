import React, { useContext } from "react";
import { AppContext } from './AppContext.jsx';
import AddContactBtn from './add-contact-btn.jsx';
import ContactList from './contact-list.jsx';
import AddUserForm from "./add-user-form.jsx";
import DeleteUserModal from "./delete-user-modal.jsx";

//create your first component
const Home = () => {

	const {store, dispatch} = useContext(AppContext);
	const {showAddUserForm, showDeleteUserModal} = store;

	return (
		<div className='container-fluid'>
			{showDeleteUserModal ? <DeleteUserModal /> : null}
			{
				showAddUserForm ?
				<AddUserForm /> :
				<div className='d-flex flex-column mx-5 my-3'>
					<AddContactBtn />
					<ContactList />
				</div>
			}
			
		</div>
	);
};

export default Home;
