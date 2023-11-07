//COMPONENTS
import MovieListBox from "./MovieListBox/MovieListBox";
import WatchedBox from "./WatchedBox";

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
      <WatchedBox />
    </main>
  );
}
