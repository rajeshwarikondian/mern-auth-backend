import jwt from "jsonwebtoken";

const userAuthMiddleware = async (req, res, next) => {
try{
const authHeader = req.headers.authorization;

if(!authHeader || !authHeader.startsWith("Bearer")){
  return res.status(401).json({
    success:false,
    message:"Not Authorized. Token missing.",
  })
}

const token = authHeader.split(" ")[1]; //get the toekn from bearer
const tokenDecoded = jwt.verify(token,process.env.JWT_SECRET);

if(!tokenDecoded?.id){
 return res.status(401).json({
   success: false,
        message: "Invalid token payload",
 })
}

req.userId = tokenDecoded.id;
console.log("userid from token (middleware)----",req.userId);
next();
} catch (error) {
    return res.status(401).json({
      success: false,
      message: "Authorization or token failed" + error.message,
    });
  }
};

export default userAuthMiddleware;
