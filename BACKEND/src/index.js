// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
import connectDB from './DB/dbconnect.js'
import { app } from './app.js'

dotenv.config({
    path : './.env'  
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 3300,  () => {
        console.log(`⚙ server is runnig on port : ${process.env.PORT}`);

    })
})

.catch((err) => {
    console.log("mongodb connection failed !!! : " , err);
})

































































/*
import express from express
const app = express()
(
    async () => {
       try{
        await mongoose.connect(`${process.env.MONGODB_URI}/ ${DB_NAME}`)
        app.on("error", (err) => {
            console.log("error", err);
            throw err;

        })
        app.listen(process.env.PORT, () => {
            console.log(`APP listening on ${process.env.PORT}`)
        });
        }
        catch (err) {
            console.log("error", err);
            throw err;

        } 
    }
)


*/
