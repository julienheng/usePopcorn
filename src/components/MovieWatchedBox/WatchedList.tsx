// COMPONENTS
import WatchedMovie from "./WatchedMovie";

type Props = {
  watched: {
    imdbRating: number;
    userRating: number;
    runtime: number;
    Title: string;
    imdbID: string;
    Poster: string;
  }[];
};

export default function WatchedList({ watched }: Props) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} />
      ))}
    </ul>
  );
}
