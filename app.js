import express from 'express';
import router from './api/routes/index';
const cors = require('cors');
// const passportSetup = require('./api/config/passport-setup');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/', router);
app.use(bodyParser.urlencoded({ extended: false }));

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
export default server;