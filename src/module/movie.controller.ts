import { Request, Response } from "express";
import { MovieService } from "./movie.service";

const createMovie = async (req: Request, res: Response) => {
  const movieData = req.body;
  const result = await MovieService.createMovie(movieData);
  res.json({
    success: true,
    message: "Movie created successfully",
    data: result,
  });
};

const getAllMovies = async (req: Request, res: Response) => {
  try {
    const result = await MovieService.getAllMovies();
    res.status(200).json({
      success: true,
      messsage: "Movies are fetched successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      messsage: "Couldn't get all movies",
      error: err,
    });
  }
};
const getMovieById = async (req: Request, res: Response) => {
  try {
    const { movieId } = req.params;
    const result = await MovieService.getMovieById(movieId);
    res.status(200).json({
      success: true,
      messsage: "Movies are fetched successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      messsage: "Couldn't get that movie",
      error: err,
    });
  }
};

export const MovieController = {
  createMovie,
  getAllMovies,
  getMovieById,
};
