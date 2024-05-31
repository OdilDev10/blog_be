import "dotenv/config";
import express, { json } from "express";
import morgan from "morgan";
import cors from "cors";
import db from "./config/mongo";
import swaggerSetup from "./config/swagger";
import clients_router from "./routes/clients";
import users_router from "./routes/users";
import payments_router from "./routes/payments";
import posts_router from "./routes/posts";

const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(json());
app.use(morgan("dev"));

app.use(clients_router);
app.use(users_router);
app.use(payments_router);
app.use(posts_router);

swaggerSetup(app);

db().then(() => {
  console.log(`Coneccion DB success`);
});

app.listen(PORT, () => {
  console.log(`App run on http://127.0.0.1:${PORT}/api-docs`);
});
