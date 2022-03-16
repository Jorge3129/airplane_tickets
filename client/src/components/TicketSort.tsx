import React, {FC} from 'react';

interface ITicketSort {
    setSort: React.Dispatch<React.SetStateAction<string>>;
    sort: string
}

interface IOptions {
    [key: string]: string
}

const TicketSort: FC<ITicketSort> = ({sort, setSort}) => {

    const buttonToOption: IOptions = {
        'Price': 'price',
        'Duration': 'segments[0].duration'
    }

    const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
        setSort(buttonToOption[e.currentTarget.value]);
    }

    const options = Object.keys(buttonToOption)
        .map(value => (
            <input
                type="button"
                key={value}
                value={value}
                className={`ticket_sort_option ${sort === buttonToOption[value] ? 'highlight' : ''}`}
                onClick={handleClick}
            />
        ));

    return (
        <li className="ticket_list_item">
            <div className="ticket_sort">
                {options}
            </div>
        </li>
    );
}

export default TicketSort;
