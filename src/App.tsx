/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";
import { tempMovieData } from "../utils/MovieData";

//COMPONENTS
import NavigationBar from "./components/NavBar/NavigationBar";
import Main from "./components/Main";
import Search from "./components/NavBar/Search";
import Logo from "./components/NavBar/Logo";
import NumResults from "./components/NavBar/NumResults";
import MovieListBox from "./components/MovieListBox/MovieListBox";
import MovieWatchedBox from "./components/MovieWatchedBox/MovieWatchedBox";

function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <div>
      {/* NAVIGATION BAR */}
      <NavigationBar>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </NavigationBar>

      {/* MAIN COMPONENT */}
      <Main>
        <MovieListBox movies={movies} />
        <MovieWatchedBox />
      </Main>
    </div>
  );
}

export default App;
