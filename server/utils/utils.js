const stops = (num) => {
    switch (num) {
        case 1:
            return ['XXX'];
        case 2:
            return ['XXX', 'YYY'];
        case 3:
            return ['XXX', 'YYY', 'ZZZ'];
        default:
            return [];
    }
}

const generateTicket = () => {
    return {
        price: Math.floor(Math.random() * 200),
        carrier: 'XXX',
        segments: [
            {
                origin: 'XXX',
                destination: 'YYY',
                date: new Date().toISOString(),
                stops: stops(Math.floor(Math.random() * 200) % 4),
                duration: Math.floor(Math.random() * 30 * 60),
                id: Math.random() + Math.random(),
            },
            {
                origin: 'YYY',
                destination: 'XXX',
                date: new Date().toISOString(),
                stops: stops(Math.floor(Math.random() * 200) % 4),
                duration: Math.floor(Math.random() * 30 * 60),
                id: Math.random() + Math.random(),
            }
        ],
        id: Math.random() + Math.random() + 'xd',
    }
}

const generateTicketArray = () => {
    return Array(10)
        .fill(null)
        .map(o => generateTicket());
}

module.exports = {generateTicketArray}
