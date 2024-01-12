import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send('hello bro')
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`)
});
