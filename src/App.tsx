/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";

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
import MovieDetails from "./components/MovieDetails";

function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("bourne");
  const [selectedId, setSelectedId] = useState<string | null>("");

  const handleSelectMovie = (id: string) => {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  };

  const onCloseMovie = () => {
    setSelectedId(null);
  };

  function handleAddWatched(movie: object) {
    setWatched((watched: object[]) => [...watched, movie]);
  }

  function handleDeleteWatched(id: string) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

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

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

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
          {isLoading && <p>Loading...</p>}
          {!isLoading && !error && (
            <MovieList movies={movies} handleSelectMovie={handleSelectMovie} />
          )}
          {error && <p>{error}</p>}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={onCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </div>
  );
}

export default App;
