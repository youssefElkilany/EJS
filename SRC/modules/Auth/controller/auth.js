import userModel from '../../../../DB/user.model.js'
import jwt from 'jsonwebtoken'

export const getsignup =(req,res)=>{

    return res.render('signUp',{pageTitle:'Regestration'})
}


export const signUp = async(req,res,next)=>{

    const {name, email , password , cpassword  , age  } = req.body

    console.log({name, email , password , cpassword  , age  })
    const checkEmail = await userModel.findOne({email})
    if(checkEmail)
    {
        return next(new Error("email already exist"))
    }

    if(password!=cpassword)
    {
        return next(new Error("Password mismatch"))
    }

   
    const user = await userModel.create({name,email,password,age})


    return res.redirect('http://localhost:5000/auth/getsignIn')
   
}


export const getlogin = (req,res)=>{

    return res.render('login',{pageTitle:'login'})
}

export const login = async(req,res,next)=>{

    const {email} = req.body

    const user = await userModel.findOne({email})
    if(!user )
    {
        return next(new Error("email not found"))
    }
   

   const token = jwt.sign({_id:user._id,email},'secret')
   
   return res.json({message:"login successfull",token})

}