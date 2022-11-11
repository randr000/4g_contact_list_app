import { contactEndpoint, agendaEndpoint } from "./api-endpoint.js";

export async function fetchAgendas() {
    
    try {
        const agendas = await fetch(agendaEndpoint);
        return agendas.json();
        
    } catch (err) {
        throw new Error('Error in fetching agendas');
    }

}

export async function fetchContacts(agenda_slug) {

    try {
        const contacts = await fetch(`${agendaEndpoint}/${agenda_slug}`);
        return contacts.json();
    } catch (err) {
        throw new Error(`Error in fecthing contacts for agenda ${agenda_slug}`);
    }
}

export async function deleteContact(contact_id) {
    
    try {
        return await fetch(`${contactEndpoint}${contact_id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        });
    } catch (err) {
        throw new Error(`Error in deleting contact ${contact_id}`);
    }
}

export async function createContact(contact) {

    try {
        return await fetch(contactEndpoint, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(contact)
        });
    } catch (err) {
        throw new Error(`Error in creating contact: ${contact}`);
    }
}

export async function updateContact(contact) {

    try {
        return await fetch(`${contactEndpoint}${contact.id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                full_name: contact.full_name,
                email: contact.email,
                agenda_slug: contact.agenda_slug,
                address: contact.address,
                phone: contact.phone
            })
        });
    } catch (err) {
        throw new Error(`Error in updating contact ${contact.id}`);
    }
}