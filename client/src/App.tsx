import React, {FC, useEffect, useState} from 'react';
import './App.css';
import TicketList from "./components/TicketList";
import {ITicket} from "./types/types";
import ticketApi from "./api/ticketApi";
import logo from './assets/logo3.png'
import Header from "./components/Header";
import Footer from "./components/Footer";

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
            <Header/>
            <TicketList tickets={tickets}/>
            <Footer/>
        </div>
    );
}

export default App;
