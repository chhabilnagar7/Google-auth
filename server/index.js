import express from 'express'
import { configDotenv } from 'dotenv';
import authRouter from './routes/autRoutes.js';
import {dbconnection} from './models/dbConnection.js'
import cors from 'cors';

configDotenv()

const app = express();
const PORT = process.env.PORT || 8080


dbconnection()

app.use(cors());

app.get('/',(req,res)=>{
    res.send('hello')
})


app.use('/auth',authRouter)
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})