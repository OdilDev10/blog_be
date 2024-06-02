import "dotenv/config";
import express, { json } from "express";
import morgan from "morgan";
import cors from "cors";
import db from "./config/mongo";
import swaggerSetup from "./config/swagger";
import users_router from "./routes/users";
import payments_router from "./routes/payments";
import posts_router from "./routes/posts";
import blogs_router from "./routes/blog";
import cards_router from "./routes/cards";
import subscriptions_router from "./routes/subscription";
import comments_router from "./routes/comment";
import plans_router from "./routes/plan";
import auth_router from "./routes/auth";

const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(json());
app.use(morgan("dev"));

app.use(auth_router);
app.use(users_router);
app.use(payments_router);
app.use(posts_router);
app.use(blogs_router);
app.use(cards_router);
app.use(subscriptions_router);
app.use(comments_router);
app.use(plans_router);

swaggerSetup(app);

db().then(() => {
  console.log(`Coneccion DB success`);
});

app.listen(PORT, () => {
  console.log(`App run on http://127.0.0.1:${PORT}/api-docs`);
});
