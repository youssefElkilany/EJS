import { Schema, model } from "mongoose";

const userSchema = new Schema({

    name: {
        type: String,
        //required: [true, 'userName is required'],
        min: [2, 'minimum length 2 char'],
        max: [20, 'max length 2 char']

    },
    // firstName:String,
    // lastName:String,
    email: {
        type: String,
        unique: [true, 'email must be unique value'],
      //  required: [true, 'email is required'],
    },
    password: {
        type: String,
      //  required: [true, 'password is required'],
    },
    phone: {
        type: String,
    },
    age:Number,
   
    // confirmEmail: {
    //     type: Boolean,
    //     default: false,
    // },
   
   
    
}, {
    timestamps: true
})


// userSchema.post('save',async function (){
//     const nameee = this.name.split(' ')
//     this.firstName = nameee[0]
//     this.lastName = nameee[nameee.lenght-1]
// })


const userModel = model('User', userSchema)
export default userModel