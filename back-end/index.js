import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import MenuRoutes from "./routes/MenuRoutes.js";
import CartRoutes from "./routes/CartRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

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

app.use("/menu", MenuRoutes);
app.use("/carts", CartRoutes);

app.get("/", (req, res) => {
  res.send("hello bro");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
