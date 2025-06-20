import express from "express"
import AuthRoutes from "./routes/auth.routes";

const app = express();

app.use(express.json());

app.use(AuthRoutes)

export default app;
