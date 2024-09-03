import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv()
 
const DB_URL = process.env.DB_URL;

const dbconnection = async () =>{
    await mongoose.connect(DB_URL)
    .then(()=>{
        console.log('MongoDB is connected')
    }).catch((err) => {
        console.log('Error :' ,err);
    })
}

export {dbconnection}