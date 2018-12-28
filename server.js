const express = require('express'); 
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors")
const server = express(); 

const PORT = 5000; 

server.use(express.json());
server.use(helmet());
server.use(morgan("short"));
server.use(cors());


server.get('/', (req, res) => {
    res.send('Hello from Express');
});


server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});