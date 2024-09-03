import {google} from 'googleapis'
import { configDotenv } from 'dotenv';
configDotenv()

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_SECRET_ID = process.env.GOOGLE_SECRET_ID;

console.log('client id',GOOGLE_CLIENT_ID);
console.log('client secret', GOOGLE_SECRET_ID);



export const oauth2client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_SECRET_ID,
    "postmessage"
)

// console.log('Google oauth2client ', oauth2client)

