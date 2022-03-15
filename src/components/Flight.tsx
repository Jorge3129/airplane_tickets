import React, {FC} from "react";
import {IFlight} from "../types/types";
import dayjs from "dayjs";

const Flight: FC<{ flight: IFlight }> = ({flight}) => {

    const {origin, destination, date, duration, stops} = flight;

    const transfers = (): string => {
        switch (stops.length) {
            case 0:
                return 'No transfers';
            case 1:
                return '1 transfer';
            default:
                return `${stops.length} transfers`;
        }
    }

    const formatDuration = (): string => {
        const hours = Math.floor(duration / 60);
        const minutes = duration - hours * 60;
        return `${hours}h ${minutes}m`
    }

    const formatDate = (): string => {
        const dateObject = dayjs(date);
        const start = dateObject.format('HH:mm');
        const end = dateObject.add(duration, 'minute').format('HH:mm');
        return `${start} - ${end}`;
    }

    return (
        <ul className="flight">
            <li className="flight_cell">
                <div className="flight_cell_title">
                    {origin} - {destination}
                </div>
                <div className="flight_cell_info">
                    {formatDate()}
                </div>
            </li>
            <li className="flight_cell">
                <div className="flight_cell_title">
                    Duration
                </div>
                <div className="flight_cell_info">
                    {formatDuration()}
                </div>
            </li>
            <li className="flight_cell">
                <div className="flight_cell_title">
                    {transfers()}
                </div>
                <div className="flight_cell_info">
                    {stops.join(', ')}
                </div>
            </li>
        </ul>
    );
}

export default Flight;
