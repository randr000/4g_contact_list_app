import { contactEndpoint, agendaEndpoint } from "./api-endpoint.js";

export async function fetchAgendas() {
    
    try {
        const agendas = await fetch(agendaEndpoint);
        return agendas.json();
        
    } catch (err) {
        throw new Error('Error in fetching agendas');
    }

}