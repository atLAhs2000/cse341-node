const express = require('express');
const bodyParser = require("body-parser");
const connectDB = require('./DB/connect');
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 8080;

app
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Headers", "Authorization, Cache-Control, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
        next();
    })
    .use('/', require('./routes'));

connectDB.initDB((err, connectDB) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`);
        });
    }
});