import express from 'express'

import AuthRouter from "./modules/Auth/auth.route.js"
import connectDB from '../DB/connection.js'
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

 

const BootStrap =  (app,express)=>{

    app.use(express.json())
    app.use(express.urlencoded({extend:false}))
    app.use('/shared',express.static(path.join(__dirname,'../views/shared'))) //3shan yfhm en shared dah msh api b3ml static 3shan yfhm en dah static folder
    //app.set('views',path.join(__dirname,'./views'))
    //app.set('views','frontend')
    
    app.set('view engine', 'ejs') //default view engine
    app.use('/auth',AuthRouter)
  
    connectDB()
}

export default BootStrap