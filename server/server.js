import express from "express";
import cors from "cors"
import router from "./router.js";
import connect_db from "./connection.js";
import dotenv from "dotenv";


dotenv.config();

const app = express();

app.use(express.json())
app.use(express.static("./dist"))

app.use(cors())

app.use("/",router);


connect_db().then(()=>{
    app.listen(process.env.VITE_PORT,(error)=>{
        if(error){
            console.log(error);
        }
        console.log("server start");
    })
})
.catch((error)=>{
    console.log(error);
})
