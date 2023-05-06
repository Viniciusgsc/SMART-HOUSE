import express from "express";
import { routes } from "./routes";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(routes);

app.use(cors());

const Server = app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT} 🚀`)
);
