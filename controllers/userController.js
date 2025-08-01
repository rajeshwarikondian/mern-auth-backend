import userModel from "../models/userModel.js";

export const getUserData = async (req, res) => {
  try {
    // console.log("req.body----->",req.body)
    // console.log("req---------->",req)

    //  const {userId} = req.body;
    const userId = req.userId; // comes form middleware
    // const userId = req.params.userId;
    console.log("userId----------->", userId);

    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User Not Found" });
    }
    res.status(200).json({
      success: true,
      userData: {
        name: user.name,
        isAccountVerified: user.isAccountVerified,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
