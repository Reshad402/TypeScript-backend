import cors from "cors";
import express, { Application, Request, Response } from "express";
import { StudentRoutes } from "./module/movie.router";

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/students", StudentRoutes);

// const getAController = (req: Request, res: Response) => {
//   const a = 10;
//   res.send(a);
// };

// app.get("/", getAController);

export default app;
