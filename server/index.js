const keys = require ('./keys');

// Express App Setup
const express = require('express');
const bodyParser = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgress client Setup
const { Pool } = require('pg');
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort
});
