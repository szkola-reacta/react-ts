import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchMovies } from '../services/movies';
import { short } from '../utils/short';
import type { Movie } from './Movie.types';

function Movies() {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetchMovies();
      console.log('data: ', data);
      setMovies(data);
    } catch (error) {
      // error handling
      console.log('error: ', error);
    }
  }

  useEffect(() => {
   fetchData();
  }, []);

  return (
    <div>
      {movies.map((movie: Movie) => (
        <div key={movie.id}>
          <h2>
            <Link to={`/movie/${movie.id}`}>
              {movie.fields.name}
            </Link>
          </h2>
          <p>{short(movie.fields.description)}</p>
        </div>
      ))}
    </div>
  );
}

export { Movies };
