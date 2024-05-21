import express, { Request, Response } from "express";
import { MovieRoutes } from "./module/movie.router";
const app = express();

//Parsers
app.use(express.json());

app.use("/api/movies", MovieRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello Wor!");
});

export default app;
