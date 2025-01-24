import { useState } from "react"
import MovieCard from "./MovieCard";

function MovieList() {
    const [movies, setMovies] = useState([
        {
            id: 1001,
            title: 'Inception',
            rate: 8.7
        },
        {
            id: 1002,
            title: 'Titanic',
            rate: 6.9
        },
        {
            id: 1003,
            title: 'World of Warcraft',
            rate: 9.9
        }
        
    ]);


    return (
    <div className="g-2">
      {movies.map((movie) => (
        <MovieCard/>
      ))}
    </div>
  )
}

export default MovieList
