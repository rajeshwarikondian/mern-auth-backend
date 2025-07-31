import jwt from "jsonwebtoken";

const userAuthMiddleware = async (req, res, next) => {
  next();

  const { token } = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      // 401 for unauthorized
      success: false,
      message: "Not Authorized, Please Login Again",
    });
  }
  try {
    const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET);
    if (tokenDecoded.id) {
      req.userId = tokenDecoded.id;
      //  req.user = { userId: tokenDecoded.id }; // ✅ Standard way
      console.log("userid_middleware------->", req.userId);
      next();
    } else {
      return res.json({
        success: false,
        message: "Authorization failed: Invalid token payload.",
      });
    }

    // next();
  } catch (error) {
    return res.json({
      success: false,
      message: "Authorization failed" + error.message,
    });
  }
};

export default userAuthMiddleware;
