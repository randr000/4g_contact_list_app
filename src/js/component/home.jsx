import React, { useContext, useEffect } from "react";
import { AppContext } from './AppContext.jsx';
import AddContactBtn from './add-contact-btn.jsx';
import ContactList from './contact-list.jsx';
import AddContactForm from "./add-contact-form.jsx";
import DeleteContactModal from "./delete-contact-modal.jsx";
import SelectAgenda from "./select-agenda.jsx";
import NewAgendaInput from "./new-agenda-input.jsx";
import DisplayMessage from "./display-message.jsx";
import DisplayAgenda from "./display-agenda.jsx";

//create your first component
const Home = () => {

	const {store, dispatch} = useContext(AppContext);
	const {showAddContactForm, showDeleteContactModal, showNewAgendaInput, contacts, selectedAgenda} = store;

	return (
		<div className='container-fluid'>
			{showDeleteContactModal ? <DeleteContactModal /> : null}
			{
				showAddContactForm ?
				<AddContactForm /> :
				<div className='d-flex flex-column mx-5 my-3'>
					<div className='d-flex flex-start'>
						<SelectAgenda />
						{showNewAgendaInput ? <NewAgendaInput /> : <DisplayAgenda />}
						<AddContactBtn />
					</div>
					{
						contacts.length === 0 ? 
							<DisplayMessage 
								msg={
										showNewAgendaInput ?
										'Enter new agenda and add a new contact' :
										selectedAgenda === 'select' ?
											'Please select an agenda from the dropdown list' :
											'No contacts for selected agenda found'
									}
							/> :
							<ContactList />
					}
					
				</div>
			}
			
		</div>
	);
};

export default Home;
