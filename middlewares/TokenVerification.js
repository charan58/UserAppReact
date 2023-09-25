const jsonwebtoken=require('jsonwebtoken')
const verifyToken=(request,response,next)=>{
    //get the token from headers property
    const bearerToken=request.headers.authorization;
    //verify the token is present or not
    if(bearerToken===undefined)
    {
        response.send({message:"Unauthorized Request"})
    }
    //token is present
    else
    {
        const token=bearerToken.split(" ")[1]
        try
        {
            jsonwebtoken.verify(token,"12345")
            next();
        }catch(err){
            response.send({message:"Error Occured",reason:err.message})
        }
    }
}
module.exports=verifyToken;