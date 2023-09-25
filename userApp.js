const exp=require('express')
const userApp=exp.Router()
const expressAsynchandler=require('express-async-handler')
const bcryptjs=require('bcryptjs')
const jsonwebtoken=require('jsonwebtoken')
//import verify token
const verifyToken=require('./middlewares/TokenVerification')
//body parser
userApp.use(exp.json())
//user register route
userApp.post('/register',expressAsynchandler(async(request,response)=>{
    //get the collection
    const userCollection=request.app.get('usercollection')
    //get user from client
    const newUser=request.body;
    //verify the user by username
    //if existed or not duplicate user is not allowed
    const userOfDb= await userCollection.findOne({username:newUser.username})
    //if exist return the response with 
    if(userOfDb!==null)
    {
        response.status(200).send({message:"User already existed"})
    }
    //user doesn't exist
    else
    {
        //hash the password
        const hashedpassword= await bcryptjs.hash(newUser.password,7)
        //replace with plain password
        newUser.password=hashedpassword
        //insert the user
        await userCollection.insertOne(newUser)
        //send response
        response.status(201).send({message:"New user created"})
    }
}))
//user login route
userApp.post('/user-login',expressAsynchandler(async(request,response)=>{
    //get collection
    const userCollection=request.app.get('usercollection');
    //get user from client
    const userObj=request.body;
    //verify username
    const userOfDB=await userCollection.findOne({username:userObj.username});
    //check username exists or not
    if(userOfDB==null)
    {
        response.status(200).send({message:"Invalid username"})
    }
    //valid username
    else
    {
        //verify password
        const verifyPassword=await bcryptjs.compare(userObj.password,userOfDB.password);
        //if passwords matched or not
        if(verifyPassword===false)
        {
            response.status(200).send({message:"Invalid Password"});
        }
        else
        {
            //create json web token
            const jwtToken=jsonwebtoken.sign({username:userOfDB.username},"12345",{expiresIn:"2m"});
            //send response
            response.status(200).send({message:"User Logged Successfully",token:jwtToken,user:userOfDB})
        }
    }
}))
module.exports=userApp