import { render, screen } from '@testing-library/react';

import { Movie } from './Movie';
import { fetchMovie } from '../services/movies';

const mockMovie = {
  id: '123',
  fields: {
    name: 'Miś powrót',
    description: 'To fajny film, ale stary'
  }
};

jest.mock('../services/movies', () => ({
  // fetchMovies: jest.fn(),
  // ...jest.requireActual('../services/movies'),
  // fetchMovie: jest.fn().mockReturnValue(Promise.resolve(mockMovie)),
  // fetchMovie: jest.fn().mockResolvedValue(mockMovie),
  fetchMovie: jest.fn(),
}));

// global.fetch = jest.fn().mockImplementationOnce(
//   () => Promise.resolve({
//     status: 200,
//     json: () => Promise.resolve(mockMovie)
//   })
// );

describe('Movie component', () => {
  it('should display Loading text', () => {
    render(<Movie />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should display one movie', async () => {
    fetchMovie.mockResolvedValue(mockMovie);

    render(<Movie />);

    expect(await screen.findByText('Title: Miś powrót')).toBeInTheDocument();
  });

  it('should display error message', async () => {
    fetchMovie.mockRejectedValue({});

    render(<Movie />);

    expect(await screen.findByText('Error message')).toBeInTheDocument();
  });
});