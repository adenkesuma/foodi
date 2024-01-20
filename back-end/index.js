import express from "express";
import bodyParser from "body-parser";
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

// const uri = `mongodb+srv://${process.env.USERNAME_MONGODB}:${process.env.PASSWORD_MONGODB}@cluster0.ntdbhbi.mongodb.net/foodi`;
const uri = `mongodb://${process.env.USERNAME_MONGODB}:${process.env.PASSWORD_MONGODB}@ac-hl5tvur-shard-00-00.ntdbhbi.mongodb.net:27017,ac-hl5tvur-shard-00-01.ntdbhbi.mongodb.net:27017,ac-hl5tvur-shard-00-02.ntdbhbi.mongodb.net:27017/foodi?replicaSet=atlas-r29bdh-shard-0&ssl=true&authSource=admin`

// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Berhasil terhubung ke mongodb');
}).catch((err) => {
  console.log(`Gagal terhubung ke mongodb ${err}`)
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});


mongoose.Promise = global.Promise;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// jwt authentication
app.post("/jwt", async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email ) {
      return res.status(400).json({ error: "Payload is incomplete" });
    }

    const user = { name, email };
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_JWT, {
      expiresIn: "1h"
    });

    res.json({ token });
  } catch (error) {
    console.error("Error creating JWT token:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/", (req, res) => {
  res.send("welcome to foodi server");
});

app.use("/menu", MenuRoutes);
app.use("/carts", CartRoutes);
app.use("/users", UserRoutes);


app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
