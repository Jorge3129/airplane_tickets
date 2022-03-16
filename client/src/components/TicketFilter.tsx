import {ChangeEvent, Dispatch, FC, SetStateAction} from "react";
import '../styles/Filter.css'

interface ITicketFilter {
    transfers: number[],
    setTransfers: Dispatch<SetStateAction<number[]>>;
}

const TicketFilter: FC<ITicketFilter> = ({transfers, setTransfers}) => {
    const optionList = ['None', 'One', 'Two', 'Three'];

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.currentTarget.value);
        if (e.currentTarget.checked)
            setTransfers([...transfers, value]);
        else
            setTransfers([...transfers.filter(t => t !== value)]);
    }

    const optionRenderList =
        optionList.map((option, i) =>
            <label key={option} className="container">{option}
                <input
                    type="checkbox"
                    className="check_input"
                    value={i}
                    onChange={handleChange}
                />
                <span className="checkmark"/>
            </label>)

    return (
        <div className="ticket_filter">
            <div className="ticket_filter_title">Transfers</div>
            <div className="ticket_filter_options">
                {optionRenderList}
            </div>
        </div>
    );
};

export default TicketFilter;
