import React, {FC} from 'react';
import {ITicket} from "../types/types";
import Ticket from "./Ticket";
import './Ticket.css'

const TicketList: FC<{ tickets: ITicket[] }> = ({tickets}) => {
    
    const ticketList = tickets.map(ticket =>
        <li
            className="ticket_list_item"
            key={JSON.stringify(ticket.segments)}
        >
            <Ticket ticket={ticket}/>
        </li>);

    return (
        <ul className="ticket_list">
            {ticketList}
        </ul>
    );
}

export default TicketList;
