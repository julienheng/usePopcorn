// COMPONENTS
import Movie from "./Movie";

type Props = {
  movies: {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
  }[];
};

export default function MovieList({ movies }: Props) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} />
      ))}
    </ul>
  );
}
