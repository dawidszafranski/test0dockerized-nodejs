import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const port = 80;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.disable("x-powered-by");
app.get("/health", (_, res) => {
  res.send(true);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
