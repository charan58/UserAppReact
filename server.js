const exp=require('express')
const mongodb=require('mongodb')
const app=exp()
app.listen(4000,()=>{
    console.log("server listening on port 4000")
})
//connect reactApp with webserver
const path=require('path')
app.use(exp.static(path.join(__dirname,'./build')))
const mClient=mongodb.MongoClient
mClient.connect('mongodb://127.0.0.1:27017')
.then(dbref=>{
    // get database object
    const dbObject=dbref.db('webappdb')
    const userCollection=dbObject.collection('usercollection')
    app.set("usercollection",userCollection)
    console.log("Connected to Database Successfully.")
})
.catch(error=>{
    console.log("error in connecting to the database is ",error)    
})
const userApp=require('./userApp')
app.use('/user-api',userApp)
// error handling middleware
const errorHandlingMiddleware=(error,request,response)=>{
    response.send({message:error.message})
}
// path handling middleware
const pathHandlingMiddleware=(request,response,next)=>{
    response.send({message:"Invalid Path"})
}
// app.use(errorHandlingMiddleware)
app.use(pathHandlingMiddleware)