import { useState } from "react";

//COMPONENTS
import MovieList from "./MovieList";
import Button from "./Button";

type Props = {
  movies: {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
  }[];
};

export default function ListBox({ movies }: Props) {
  const [isOpen1, setIsOpen1] = useState(true);


  return (
    <div className="box">
      <Button isOpen1={isOpen1} setIsOpen1={setIsOpen1} />
      {isOpen1 && <MovieList movies={movies} />}
    </div>
  );
}
