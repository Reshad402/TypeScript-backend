import express from "express";
import { StudentControllers } from "./movie.controller";

const router = express.Router();

router.post("/create", StudentControllers.createStudent);

router.get("/", StudentControllers.getAllStudents);

router.get("/:studentId", StudentControllers.getSingleStudent);

export const StudentRoutes = router;
