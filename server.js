const express = require('express');
//const connectDB = require('./DB/Connection');
const app = express();

const dotenv = require("dotenv");
dotenv.config();

//connectDB();
const PORT = process.env.PORT || 3000;

app.use('/', require('./routes'));

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});