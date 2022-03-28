const express = require('express');
const {generateTicketArray} = require("./utils/tickets");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors');

app.use(cors({
    origin: ['http://localhost:4000', 'http://localhost:3000', 'http://localhost:3001',
        'https://sanchez-airplane-server.herokuapp.com/','https://sanchez-airplane-tickets.herokuapp.com']
}))


app.get('/', (req, res) => {
    res.json(generateTicketArray());
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
