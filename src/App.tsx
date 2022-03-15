import React, {FC, useEffect, useState} from 'react';
import './App.css';
import TicketList from "./components/TicketList";
import {ITicket} from "./types/types";
import axios from "axios";

const App: FC = () => {

    const [tickets, setTickets] = useState<ITicket[]>([]);

    const fetchTickets = async () => {
        const response = await axios.get('https://front-test.beta.aviasales.ru/search');
        console.log(response)
        const {searchId} = response.data;
        const response2 = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
        const {tickets} = response2.data;
        setTickets(tickets.slice(0, 10));
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
