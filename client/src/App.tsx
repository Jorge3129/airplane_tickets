import React, {FC, useEffect, useState} from 'react';
import './App.css';
import TicketList from "./components/TicketList";
import {ITicket} from "./types/types";
import ticketApi from "./api/ticketApi";

const App: FC = () => {

    const [tickets, setTickets] = useState<ITicket[]>([]);

    useEffect(() => {
        (async () => {
            const res = await ticketApi.get();
            setTickets(res);
        })();
    }, [])

    return (
        <div className="App">
            <TicketList tickets={tickets}/>
        </div>
    );
}

export default App;
