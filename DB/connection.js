import mongoose from 'mongoose'

const connectDB = async ()=>{
    return await mongoose.connect("mongodb://0.0.0.0:27017/EJS").then(res=>{
        console.log("DB is connected")
    }).catch(err=>{
        console.log("DB failed")
    })
}

export default connectDB
