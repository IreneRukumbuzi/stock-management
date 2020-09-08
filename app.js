import express from 'express';
import router from './api/routes/index';
const cors = require('cors');
const passportSetup = require('./api/config/passport-setup');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;


const db = require('./api/config/database');
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