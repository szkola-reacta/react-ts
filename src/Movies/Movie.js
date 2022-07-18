import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovie } from '../services/movies';

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
    return (
      <div>
        <h2>{movie.fields.name}</h2>
        <p>{movie.fields.description}</p>
      </div>
    );
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
