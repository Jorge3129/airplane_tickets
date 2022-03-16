const express = require('express');
const {generateTicketArray} = require("./utils/utils");
const app = express();
const PORT = 4000;
const cors = require('cors');

app.use(cors({
    origin: ['http://localhost:4000', 'http://localhost:3000']
}))


app.get('/', (req, res) => {
    res.json(generateTicketArray());
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
