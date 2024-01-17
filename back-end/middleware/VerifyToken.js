import jwt from "jsonwebtoken";

// verify jwt token
const verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized access");
  }

  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_JWT, (err, decoded) => {
    if (err) {
      res.status(401).send(err);
    }

    req.decoded = decoded;
    next();
  })
}

export default verifyToken;
