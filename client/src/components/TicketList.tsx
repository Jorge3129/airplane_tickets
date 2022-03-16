import React, {FC, useMemo, useState} from 'react';
import {ITicket} from "../types/types";
import Ticket from "./Ticket";
import '../styles/Ticket.css'
import _ from 'lodash';
import TicketSort from "./TicketSort";
import TicketFilter from "./TicketFilter";

const TicketList: FC<{ tickets: ITicket[] }> = ({tickets}) => {

    const [sort, setSort] = useState<string>('price');
    const [transfers, setTransfers] = useState<number[]>([]);

    const sortedTickets = useMemo(() => {
        return sort ? _.sortBy(tickets, t => _.get(t, sort)) : tickets;
    }, [tickets, sort]);

    const filteredTickets = useMemo(() => {
        return transfers.length ? _.filter(sortedTickets, t => transfers.includes(t.segments[0].stops.length)) : sortedTickets;
    }, [sortedTickets, transfers]);

    const ticketList = filteredTickets.map(ticket =>
        <li
            className="ticket_list_item"
            key={ticket.id}
        >
            <Ticket ticket={ticket}/>
        </li>);

    return (
        <main className="ticket_main">
            <TicketFilter transfers={transfers} setTransfers={setTransfers}/>
            <ul className="ticket_list">
                <TicketSort sort={sort} setSort={setSort}/>
                {ticketList}
            </ul>
        </main>
    );
}

export default TicketList;
