//COMPONENTS
import MovieListBox from "./MovieListBox/MovieListBox";
import MovieWatchedBox from "./MovieWatchedBox/MovieWatchedBox";

type Props = {
  movies: {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
  }[];
};

export default function Main({ movies }: Props) {
  return (
    <main className="main">
      <MovieListBox movies={movies} />
      <MovieWatchedBox />
    </main>
  );
}
