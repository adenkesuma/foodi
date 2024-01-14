import express from "express";
import cors from "cors";
import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// mongodb config
const uri = `mongodb+srv://${process.env.USERNAME_MONGODB}:${process.env.PASSWORD_MONGODB}@cluster0.ntdbhbi.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    // db and collections
    const menuCollections = client.db("foodi").collection("menu");
    const cartCollections = client.db("foodi").collection("cart");

    // all menu items operations
    app.get("/menu", async(req, res) => {
      const result = await menuCollections.find().toArray();
      res.send(result);
    })

    app.post("/carts", async(req, res) => {
      const cartItem = req.body;
      const result = await cartCollections.insertOne(cartItem);
      res.send(result);
    })

    app.get("/carts", async(req, res) => {
      const email = req.query.email;
      const filter = { email: email };
      const result = await cartCollections.find(filter).toArray() ;
      res.send(result);
    })

    app.delete("/carts")

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send('hello bro')
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`)
});
