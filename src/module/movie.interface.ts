// Review type to represent each review in the reviews array
export type Review = {
  email: string;
  rating: number;
  comment: string;
};

export type Movie = {
  title: string;
  description: string;
  releaseDate: Date;
  genre: string;
  isDeleted: boolean;
  viewCount: number;
  reviews: Review[];
  slug: string;
};
