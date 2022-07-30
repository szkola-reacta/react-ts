import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovie } from '../services/movies';
import { MovieContent } from './MovieContent';

function Movie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const data = await fetchMovie(id);
      setMovie(data);
    } catch (error) {
      // error handling
    }
  }

  useEffect(() => {
   fetchData();
  }, []);

  const renderMovie = (movie) => {
    return <MovieContent movie={movie} />;
  }

  return (
    <div>
      <div>
        {movie && renderMovie(movie)}
      </div>
    </div>
  );
}

export { Movie };
