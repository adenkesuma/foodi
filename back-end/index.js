import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import MenuRoutes from "./routes/MenuRoutes.js";
import CartRoutes from "./routes/CartRoutes.js";
import UserRoutes from "./routes/UserRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

const uri = `mongodb+srv://${process.env.USERNAME_MONGODB}:${process.env.PASSWORD_MONGODB}@cluster0.ntdbhbi.mongodb.net/foodi`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

mongoose.Promise = global.Promise;

// jwt authentication
app.post("/jwt", async(req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_JWT, {
    expiresIn: "1h"
  });

  res.json({ token });
});

// verify jwt token
const verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized access");
  }

  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, process.env.ACCESSA_TOKEN_JWT, (err, decoded) => {
    if (err) {
      res.status(401).send("Token in invalid!");
    }

    req.decoded = decoded;
    next();
  })
}

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to foodi server");
});

app.use("/menu", MenuRoutes);
app.use("/carts", CartRoutes);
app.use("/users", UserRoutes);


app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
