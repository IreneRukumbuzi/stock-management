const express = require('express');
const router = require('./routes/index');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const path = require('path');

const db = require('./config/database');
db.authenticate()
    .then(() => console.log('Database is connected...'))
    .catch((err) => console.log(err));

const app = express();
app.use(cors());

app.use('/', router);
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log('Listening on port 3000 ...');
})