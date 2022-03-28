import React, {FC, useEffect, useState} from 'react';
import './App.css';
import TicketList from "./components/TicketList";
import {ITicket} from "./types/types";
import ticketApi from "./api/ticketApi";
import logo from './assets/logo3.png'

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
            <img
                src={logo}
                alt="lol"
                style={{width: '8em',
                    margin: '3em auto 0',
                    borderRadius: '50%',
                    boxShadow: '0.4em 0.4em 0.5em #999'}}
            />
            <TicketList tickets={tickets}/>
        </div>
    );
}

export default App;
