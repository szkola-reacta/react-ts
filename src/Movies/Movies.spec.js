import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Movies } from './Movies';
import { fetchMovies } from '../services/movies';

jest.mock('../services/movies', () => ({
  fetchMovies: jest.fn(),
}));

describe('Movies component', () => {
  it('should display some movies', async () => {

    fetchMovies.mockResolvedValue([
      {
        id: 1,
        fields: {
          name: 'Miś',
          description: 'Super film',
        }
      }, {
        id: 2,
        fields: {
          name: 'Killer',
          description: 'Jurek K',
        }
      }
    ]);

    render(<MemoryRouter><Movies /></MemoryRouter>);

    expect(await screen.findByText('Killer')).toBeInTheDocument();
  });
});