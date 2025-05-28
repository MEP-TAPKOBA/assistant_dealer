import { PrismaClient, User } from "@prisma/client"; 
import { UserService } from "./services/UserService";
import express from "express"

const prisma = new PrismaClient()
const userService = new UserService(prisma)

const port = process.env.PORT || 5000;
const app = express()

async function run() {
    app.use(express.json())
    app.get('/', (req, res) => {
        res.status(200).json({message:`Server is working Ситяс`})
    })
    app.listen(port, () =>{
        console.log(`Ситяс Сервер запущен на порту ${port}`)
    })
}

run()