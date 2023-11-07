import { useState } from "react";
import "./App.css";
import { tempMovieData } from "../utils/MovieData";

//COMPONENTS
import NavigationBar from "./components/NavBar/NavigationBar";
import Main from "./components/Main";

function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <div>
      <NavigationBar movies={movies} />
      <Main movies={movies} />
    </div>
  );
}

export default App;
