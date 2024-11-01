import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { PORT } from './config/env.js';
import { authRouter } from './routes/auth.routes.js';

const app = express();

//Middlewares
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(morgan("dev"));
app.use(helmet());
app.use(cookieParser())
app.use(express.urlencoded({
    extended: true
}))

//Rutas
app.use("/auth", authRouter);

app.listen(PORT, () => console.log(`Server on port ${PORT}`))