import { Movie } from "./movie.interface";
import { MMovie } from "./movie.model";

const createMovie = async (payload: Movie) => {
  const result = await MMovie.create(payload); //Busness logic
  return result;
};
const getAllMovies = async () => {
  const result = await MMovie.find(); //Busness logic
  return result;
};
const getMovieById = async (id: string) => {
  const result = await MMovie.findById(id); //Busness logic
  return result;
};

export const MovieService = {
  createMovie,
  getAllMovies,
  getMovieById,
};
