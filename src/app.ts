import express, {Application, Request, Response} from "express"
import * as dotenv from 'dotenv';
dotenv.config();

const app: Application = express()

const port: number = 4000

app.get("/", (req: Request, res: Response) => {
    res.send("Hello and welcome to typescript with postgresql")
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})