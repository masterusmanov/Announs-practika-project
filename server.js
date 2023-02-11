require('dotenv').config();
const express = require('express');
const cors = require('cors')
const routeUser = require('./router/announs.router.js')

const app = express();
app.use(cors())
app.use(express.json());
app.use(routeUser);

const PORT = process.env.PORT || 7000
app.listen(PORT, () =>{
    console.log(`Server run on the port ${PORT}`);
})