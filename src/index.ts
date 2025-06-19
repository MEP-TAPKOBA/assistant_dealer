import supplierProductRouter from './routes/supplierProduct'
import productInShopRouter from './routes/productInShop'
import registrationRouter from './routes/registration'
import supplierRouter from './routes/supplier'
import cookieParser from 'cookie-parser'
import loginRouter from './routes/login'
import shopRouter from './routes/shop'
import userRouter from './routes/user'
import bodyParser from 'body-parser'
import appRouter from './routes/app'
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
    // ------------ ROUTES ------------ //
    app.use('/', appRouter)
    app.use('/registration',registrationRouter)
    app.use('/user', userRouter)
    app.use('/login', loginRouter)
    app.use('/suppliers',supplierRouter)
    app.use('/shop',shopRouter)
    app.use('/supplier_products',supplierProductRouter)
    app.use('/product_in_shop',productInShopRouter)
    app.listen(port, () => {
        console.log(`Ситяс Сервер запущен на порту ${port}`)
    })
}

run()