import EmailServiceDao from "./EmailServiceDao";

const config = require('../../index');

export {}

const mongoDb = require('./core/MongoDb');

const uuid = require('uuid');
// @ts-ignore
const bcrypt = require('bcrypt');
class AuthDao {
    constructor() {
    }
    signUp = async (req: any) => {
        try {
            let userObj = req.body;

            // Check for required fields based on role
            if (!userObj.name || !userObj.password) {
                return Promise.resolve({message:"Name and password required"});
            }

            // For candidates, check email
            if (userObj.role === "candidate" && !userObj.email) {
                return Promise.resolve({message:"Email is required for candidates"});
            }

            // For recruiters, check orgEmail
            if (userObj.role === "recruiter" && !userObj.orgEmail) {
                return Promise.resolve({message:"Organization email is required for recruiters"});
            }

            // Determine which email to use for database operations
            const emailToUse = userObj.role === "candidate" ? userObj.email : userObj.orgEmail;
            
            userObj["created_dtz"] = new Date();
            const existing = await mongoDb.mongoDb.findOne('users', { email: emailToUse });
            if (existing)
                return Promise.resolve({message:"Email already exists"});

            const hashedPassword = await bcrypt.hash(userObj.password, 10);
            userObj.password = hashedPassword;
            const otp = Math.floor(100000 + Math.random() * 900000).toString();
            const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 mins
            userObj["otp"] = otp;
            userObj["otpExpiry"] = otpExpiry;
            userObj["isVerified"] = false;
            
            // Store the appropriate email in the database
            userObj["email"] = emailToUse;
            
            await mongoDb.mongoDb.insertOne('users', userObj);
            const mailer = new EmailServiceDao();
            await mailer.sendOtpEmail(emailToUse, otp);
        return Promise.resolve({ message: 'OTP sent to your email' });
    }

    catch(e: any) {
        // @ts-ignore
        if (parseInt(process.env.DEBUG) === 1) {
            console.log(e.stack);
        }
        return Promise.reject(e);
    }
}
    getUser = async (req: any,userId:any) => {
        try {
            let userObj = req.body;
            const existing = await mongoDb.mongoDb.findOne('users', {email:userId});
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
module.exports = AuthDao;
