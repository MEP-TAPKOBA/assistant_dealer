import userRouter  from './routes/user'
import express from "express"

const port = process.env.PORT || 5000;
const app = express()

async function run() {
    app.use(express.json())
    app.get('/', (req, res) => {
        res.status(200).json({message:`Server is working Ситяс`})
    })
    app.use('/user', userRouter)
    app.listen(port, () =>{
        console.log(`Ситяс Сервер запущен на порту ${port}`)
    })
}

run()