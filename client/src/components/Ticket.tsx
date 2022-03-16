import React, {FC} from 'react';
import {ITicket} from "../types/types";
import Flight from "./Flight";
import '../styles/Ticket.css'

const Ticket: FC<{ ticket: ITicket }> = ({ticket}) => {

    const {price, carrier, segments} = ticket;

    const flightList = segments.map(flight =>
        <li key={flight.date + ''}>
            <Flight flight={flight}/>
        </li>);

    return (
        <div className="ticket">
            <div className="ticket-header">
                <div className="ticket-header-price">
                    {price} USD
                </div>
                <div className="ticket-header-carrier">
                    {carrier}
                </div>
            </div>
            <ul className="ticket-body">
                {flightList}
            </ul>
        </div>
    );
};

export default Ticket;

