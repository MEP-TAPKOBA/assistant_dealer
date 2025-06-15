import cookieParser from 'cookie-parser'
import loginRouter from './routes/login'
import registrationRouter from './routes/registration'
import userRouter from './routes/user'
import bodyParser from 'body-parser';
import express from "express"
import path  from "path";


const templatesPath = path.resolve(process.cwd(),'public','views')
const port = process.env.PORT || 5000;
const app = express()

async function run() {
    app.use(express.static('public'))
    app.use(express.json())
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(cookieParser());
    app.set('view engine','ejs')
    app.set('views',templatesPath)
    app.get('/', (req, res) => {
        res.render('index', {username : 'Пидорас'})
    })
    app.use('/registration',registrationRouter)
    app.use('/user', userRouter)
    app.use('/login', loginRouter)
    app.listen(port, () => {
        console.log(`Ситяс Сервер запущен на порту ${port}`)
    })
}

run()