/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
// import { tempMovieData, tempWatchedData } from "../utils/MovieData";

//COMPONENTS
import NavigationBar from "./components/NavBar/NavigationBar";
import Main from "./components/Main";
import Search from "./components/NavBar/Search";
import Logo from "./components/NavBar/Logo";
import NumResults from "./components/NavBar/NumResults";
import Box from "./components/Box";
import MovieList from "./components/MovieListBox/MovieList";
import WatchedSummary from "./components/MovieWatchedBox/WatchedSummary";
import WatchedList from "./components/MovieWatchedBox/WatchedList";

function App() {
  const [movies, setMovies] = useState([]);
  const [watched, _setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("bourne");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=947eaf2b&s=${query}`
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();

        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
        console.log(data);
      } catch (err: unknown) {
        console.error((err as Error).message);
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <div>
      {/* NAVIGATION BAR */}
      <NavigationBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavigationBar>

      {/* MAIN COMPONENT */}
      <Main>
        <Box>
          {isLoading && <MovieList movies={movies} />}
          {!isLoading && !error && <MovieList movies={movies} />}
          {error && <p>{error}</p>}
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
