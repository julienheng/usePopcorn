// COMPONENTS
import Movie from "./Movie";

type Props = {
  movies: {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
  }[];
  handleSelectMovie: (id: string) => void;
};

export default function MovieList({ movies, handleSelectMovie }: Props) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} handleSelectMovie={handleSelectMovie}  />
      ))}
    </ul>
  );
}
