import express from 'express';
import bodyParser from 'body-parser';
import {decodeJWTToken} from "./src/middleware/JWTProvider";

export const sql = require('mssql');

require('dotenv').config();
const CosmosClient = require('@azure/cosmos').CosmosClient;
const cors = require('cors');
const MongoDb = require('./src/dao/core/MongoDb');
const AuditLog = require('./src/middleware/AuditLog')


const app = express();
app.disable("x-powered-by");


//Route imports
const auth = require('./src/route/Auth.route');
const log = require('./src/route/JobPortalOperation.route');

//CORS
const corsOptions = {
    exposedHeaders: ['X-AUTH-TOKEN', 'Run-Id', 'SESSION-INACTIVITY-TIME'],//INC772452
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

//Body Parser
// create application/json parser
app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({
    parameterLimit: 100000,
    limit: '50mb',
    extended: true
}));

//Enable cosmos

//const cosmosDao = new MongoDb()
//const auditLog = new AuditLog(cosmosDao);
//Cosmos connection
/*
cosmosDao
    .init((err: any) => {
        // @ts-ignore
        if (parseInt(process.env.DEBUG) === 1) {
            console.error(err)
        }
    })
    .catch((err: any) => {
        // @ts-ignore
        if (parseInt(process.env.DEBUG) === 1) {
            console.error(err)
            console.error(
                'Shutting down because there was an error settinig up the database.'
            )
        }
        process.exit(1);
    })
*/

//SQL connection

//instantiate a connection pool

//Route PATH
const defaultPath = '/auth/api';
app.use(defaultPath, auth);
app.use(defaultPath, log);

app.get('/', (_req, _res) => {
    _res.send('JOB-PORTAL ' + process.env.ENV + ' Running Successfully!');
});

process.on('uncaughtException', function (err) {
    if (parseInt(process.env.DEBUG||'0') === 1) {
        console.log(err);
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

//module.exports.cosmosDao = cosmosDao;
