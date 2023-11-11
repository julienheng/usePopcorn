// COMPONENTS
import WatchedMovie from "./WatchedMovie";

type Props = {
  watched: {
    imdbRating: number;
    userRating: number;
    runtime: number;
    Title: string;
    imdbID: string;
    poster: string;
  }[];
  onDeleteWatched: (id: string) => void;
};

export default function WatchedList({ watched, onDeleteWatched }: Props) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} onDeleteWatched={onDeleteWatched} />
      ))}
    </ul>
  );
}
