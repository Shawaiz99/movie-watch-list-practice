import MovieCard from './MovieCard';

function MovieList({ movies, removeMovie }) {
  return movies.length < 1 ? (
    <div className="text-center mt-5">No movies yet</div>
  ) : (
    <div className="d-flex flex-column gap-3 align-items-center mt-5">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} removeMovie={removeMovie} />
      ))}
    </div>
  );
}

export default MovieList;