import axios from 'axios';
import type { AxiosResponse, AxiosRequestConfig } from 'axios';

import type { Movie } from '../Movies/Movie.types';

const API_URL = 'https://api.airtable.com/v0/appvzE7WewgSrHiFm';
const API_KEY = `Bearer ${process.env.REACT_APP_API_KEY}`;

const config: AxiosRequestConfig = {
  baseURL: API_URL,
  headers: {
    Authorization: API_KEY,
  },
}

const instance = axios.create(config);

type MoviesResponse = {
  records: Movie[]
}

export const fetchMovies = async () => {
  const response = await instance.get<MoviesResponse>('/movies/');
  const data = response.data;

  return data.records;
}

export const fetchMovie = async (id: string) => {
  const response = await instance.get<Movie>(`/movies/${id}`);
  const data = response.data;

  return data;
}

export const fetchMovieResponse = async (id: string) => {
  const response = await instance.get<AxiosResponse<Movie>>(`/movies/${id}`);

  return response;
}