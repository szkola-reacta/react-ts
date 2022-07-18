const API_URL = 'https://api.airtable.com/v0/appvzE7WewgSrHiFm';
const API_KEY = `Bearer ${process.env.REACT_APP_API_KEY}`;

export const fetchMovies = async () => {
  const response = await fetch(`${API_URL}/movies/`, {
    headers: {
      Authorization: API_KEY,
    }
  });
  const data = await response.json();

  return data.records;
}

export const fetchMovie = async (id) => {
  const response = await fetch(`${API_URL}/movies/${id}`, {
      headers: {
        Authorization: API_KEY,
      }
  });

  const data = await response.json();

  return data;
}