import jwt from "jsonwebtoken";

// Create JWT token and send to client
export const createJWT = async (req, res) => {
  const email = req.body;

  const token = jwt.sign(email, process.env.SECRET_KEY, { expiresIn: "3h" });

  return res
    .cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    })
    .send({ success: true });
};

// Clear cookie on logout
export const clearCookie = async (req, res) => {
  return res
    .clearCookie("token", {
      maxAge: 0,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    })
    .send({ success: true });
};

export const verifyToken = (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    return res
      .status(401)
      .send({ message: "Unauthorized Access. Please Provide token." });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .send({ message: "Unauthorized Access. Invalid Token." });
    } else {
      req.user = decoded;
      next();
    }
  });
};
