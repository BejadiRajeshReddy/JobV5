export const sql = require('mssql');
const uuid = require('uuid');
const {BlobServiceClient} = require('@azure/storage-blob');
const CommonDao = require('../dao/CommonDao');
const cosmos = require('../../index');
const AuthDao = require('../dao/AuthDao');
const mongoDb = require('../../../job-portal/src/dao/core/MongoDb');
class JobPortalOperationDao {
    constructor() {
    }
    getJoblist = async (req: any) => {
        try {
            let userObj = req.body;
            const existing = await mongoDb.mongoDb.findMany('job', {email:userObj.user_id});
            return Promise.resolve(existing);
        }
        catch(e: any) {
            // @ts-ignore
            if (parseInt(process.env.DEBUG) === 1) {
                console.log(e.stack);
            }
            return Promise.reject(e);
        }
    }
    insertJob = async (req: any) => {
        try {
            let jobObj = req.body;
            jobObj["created_dtz"] = new Date();
            jobObj["modified_dtz"] = new Date();
            const existing = await mongoDb.mongoDb.insertOne('job', jobObj);
            return Promise.resolve(existing);
        }
        catch(e: any) {
            // @ts-ignore
            if (parseInt(process.env.DEBUG) === 1) {
                console.log(e.stack);
            }
            return Promise.reject(e);
        }
    }
}


module.exports = JobPortalOperationDao;
