import express from 'express'
import BootStrap from './SRC/index.route.js'
//import job from './Src/Utils/cronWarningMsg.js'
// import path from 'path'
// import { fileURLToPath } from 'url'
// import dotenv from 'dotenv'
// //set directory dirname 
// const __dirname = path.dirname(fileURLToPath(import.meta.url))
// dotenv.config({ path: path.join(__dirname, './config/.env') })


const app = express()






BootStrap(app,express)

app.listen(5000,()=>{
    console.log("server is running")
})