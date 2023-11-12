/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";
import { useMovies } from "../utils/useMovies";
import { useLocalStorageState } from "../utils/useLocalStorage";

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
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>("");

  const { movies, error, isLoading } = useMovies(query);

  const [watched, setWatched] = useLocalStorageState([], "watched");

  const handleSelectMovie = (id: string) => {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  };

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  function handleAddWatched(movie: object) {
    setWatched((watched: object[]) => [...watched, movie]);
  }

  function handleDeleteWatched(id: string) {
    setWatched((watched: object[]) =>
      watched.filter((movie: any) => (movie.imdbID as string) !== id)
    );
  }

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
              onCloseMovie={handleCloseMovie}
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
