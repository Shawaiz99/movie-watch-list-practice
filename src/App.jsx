import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import { useState } from 'react';
import ThemeToggler from './components/ThemeToggler'

function App() {
  const [movies, setMovies] = useState([]);

  // set up the state for the editingMovie
  const [editingMovie, setEditingMovie] = useState(null);

  const addMovie = (newMovie) => {
    // We cannot mutate - the actual state (it is always immutable)
    // movies.push(newMovie);
    console.log('Adding the new movie.', newMovie);
    setMovies((prev) => [...prev, newMovie]);
  };

  const removeMovie = (id) => {
    // we are accessing movies directly
    // const filteredArray = movies.filter((movie) => {movie.id !== id});
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
  };

  const editMovie = (movieToEdit) => {
    console.log('Captured Edit Movie: ', movieToEdit);
    setEditingMovie(movieToEdit);
  };

  const updateMovie = (updatedMovie) => {
    setMovies((prev) =>
      prev.map((movie) => (movie.id === updatedMovie.id ? updatedMovie : movie))
    );
    // todo - set the editingMovie to null
    setEditingMovie(null);
  };

  return (
    <>
      <Navbar>
        <ThemeToggler/>
      </Navbar>
      <div className="d-flex justify-content-center">
        <MovieForm
          addMovie={addMovie}
          editingMovie={editingMovie}
          updateMovie={updateMovie}
        />
      </div>
      <MovieList
        movies={movies}
        editMovie={editMovie}
        removeMovie={removeMovie}
      />
    </>
  );
}

export default App;