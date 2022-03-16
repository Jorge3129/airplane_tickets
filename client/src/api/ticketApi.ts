import axios from "axios";
import {ITicket} from "../types/types";

class TicketApi {
    async get(): Promise<ITicket[]> {
        const response = await axios.get<ITicket[]>('http://localhost:4000');
        return response.data;
    }
}

export default new TicketApi()

