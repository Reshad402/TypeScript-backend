//Making schema object
import { Schema, model } from "mongoose";
import { Movie, Review } from "./movie.interface";

const reviewSchema = new Schema<Review>({
  email: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

const movieSchema = new Schema<Movie>({
  title: { type: String, required: [true, "Title is Required"] },
  description: { type: String, required: [true, "Description is Required"] },
  releaseDate: { type: Date },
  genre: { type: String },
  isDeleted: { type: Boolean, default: false },
  viewCount: { type: Number, default: 0 },
  reviews: { type: [reviewSchema], default: [] },
  slug: { type: String },
});

export const MMovie = model<Movie>("MMovie", movieSchema);
