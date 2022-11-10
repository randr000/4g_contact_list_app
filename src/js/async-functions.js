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