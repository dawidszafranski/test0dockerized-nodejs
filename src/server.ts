import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import "./monitor";

dotenv.config();

const port = 8081;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  console.log("/");
  res.send("Hello world !");
});

app.get("/health", (_, res) => {
  console.log("/health");
  res.send(true);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
