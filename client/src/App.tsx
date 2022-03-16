import React, {FC, useEffect, useState} from 'react';
import './App.css';
import TicketList from "./components/TicketList";
import {ITicket} from "./types/types";
import axios from "axios";

const App: FC = () => {

    const [tickets, setTickets] = useState<ITicket[]>([]);

    const fetchTickets = async () => {
        const response = await axios.get('https://front-test.beta.aviasales.ru/search');
        const response2 = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${response.data.searchId}`);
        setTickets(response2.data.tickets
            .slice(0, 10)
            .map((t: ITicket) => ({...t, price: Math.floor(t.price / 200)})));
    }

    useEffect(() => {
        (async () => await fetchTickets())();
    }, [])

    return (
        <div className="App">
            <TicketList tickets={tickets}/>
        </div>
    );
}

export default App;
