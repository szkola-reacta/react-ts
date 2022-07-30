function MovieContent(props) { // props.movie
  const { movie } = props;
  return (
    <div>
      <h2>Title: {movie.fields.name}</h2>
      <p>{movie.fields.description}</p>
    </div>
  );
}

export { MovieContent };
