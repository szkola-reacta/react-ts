import type { Movie } from './Movie.types';

type Props = {
  readonly movie: Movie;
}

function MovieContent(props: Props) { // props.movie
  const { movie } = props;
  return (
    <div>
      <h2>Title: {movie.fields.name}</h2>
      <p>{movie.fields.description}</p>
    </div>
  );
}

export { MovieContent };
