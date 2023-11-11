type Props = {
  movie: {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
  };
  handleSelectMovie: (id: string) => void;
};

export default function Movie({ movie, handleSelectMovie }: Props) {
  return (
    <li key={movie.imdbID} onClick={() => handleSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
