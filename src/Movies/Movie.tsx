import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovie } from '../services/movies';
import { MovieContent } from './MovieContent';
import type { Movie } from './Movie.types';

function Movie() {
  const [movie, setMovie] = useState(null);
  const [hasError, setHasError] = useState(false);
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const data = await fetchMovie(id);
      console.log('Movie data: ', data);
      setMovie(data);
    } catch (error) {
      // error handling
      setHasError(true);
    }
  }

  useEffect(() => {
   fetchData();
  }, []);

  const renderMovie = (movie: Movie) => {
    return <MovieContent movie={movie} />;
  }

  return (
    <div>
      <div>
        {hasError && <p>Error message</p>}
        {!movie && <p>Loading...</p>}
        {movie && renderMovie(movie)}
      </div>
    </div>
  );
}

export { Movie };
