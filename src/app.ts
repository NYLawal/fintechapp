import express, {Application, Request, Response} from "express"
import * as dotenv from 'dotenv';
dotenv.config();

import db from "./database/connect";

const app: Application = express()
const port:number = Number(String(process.env.PORT)) || 4000

app.get("/", (req: Request, res: Response) => {
    res.send("Hello and welcome to typescript with postgresql")
})

// establish and ensure database connection 
db.raw("SELECT 1").then(() => {
    console.log("PostgreSQL connected");
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`)
    })
})
.catch((e) => {
    console.log("PostgreSQL not connected");
    console.error(e);
});

