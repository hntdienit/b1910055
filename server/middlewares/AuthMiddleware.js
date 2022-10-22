import jwt from "jsonwebtoken";

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");
  // console.log("vao middlewares");
  // console.log("accessToken: ", accessToken);
  if (!accessToken) {
    return res.status(200).json({ error: "User not logged in!" });
  }

  try {
    const validToken = jwt.verify(accessToken, process.env.JWT_SECRET);
    req.user = validToken.sub;
    if (validToken) {
      // console.log("chuyen tiep");
      return next();
    }
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

export default { validateToken };
