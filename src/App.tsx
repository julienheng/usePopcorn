/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";
import { tempMovieData, tempWatchedData } from "../utils/MovieData";

//COMPONENTS
import NavigationBar from "./components/NavBar/NavigationBar";
import Main from "./components/Main";
import Search from "./components/NavBar/Search";
import Logo from "./components/NavBar/Logo";
import NumResults from "./components/NavBar/NumResults";
import Box from "./components/Box";
// import MovieWatchedBox from "./components/MovieWatchedBox/MovieWatchedBox";
import MovieList from "./components/MovieListBox/MovieList";
import WatchedSummary from "./components/MovieWatchedBox/WatchedSummary";
import WatchedList from "./components/MovieWatchedBox/WatchedList";

function App() {
  const [movies, _setMovies] = useState(tempMovieData);
  const [watched, _setWatched] = useState(tempWatchedData);

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
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} />
        </Box>
      </Main>
    </div>
  );
}

export default App;
