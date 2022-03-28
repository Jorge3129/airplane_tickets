import axios from "axios";
import {ITicket} from "../types/types";

class TicketApi {
    async get(): Promise<ITicket[]> {
        const urls = ['https://aviasales-server.herokuapp.com/', 'http://localhost:4000']
        const response = await axios.get<ITicket[]>(urls[1]);
        return response.data;
    }
}

export default new TicketApi()

