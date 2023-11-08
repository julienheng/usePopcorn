type Props = {
  watched: {
    imdbRating: number;
    userRating: number;
    runtime: number;
  }[];
};

export default function MovieSummary({ watched }: Props) {
  const average = (arr: number[]) =>
    arr.reduce(
      (acc: number, cur: number, _i: number, arr: number[]) =>
        acc + cur / arr.length,
      0
    );

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p className="">
          <span>#️⃣</span>
          <span className="">{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}
