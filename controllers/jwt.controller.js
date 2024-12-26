import jwt from "jsonwebtoken";

// Create JWT token and send to client
export const createJWT = async (req, res) => {
  const email = req.body;

  const token = jwt.sign(email, process.env.SECRET_KEY, { expiresIn: "3h" });

  console.log(token);

  res
    .cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    })
    .send({ success: true });
};

// Clear cookie on logout
export const clearCookie = async (req, res) => {
  res
    .clearCookie("token", {
      maxAge: 0,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    })
    .send({ success: true });
};
