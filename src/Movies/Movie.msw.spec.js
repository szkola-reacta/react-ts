import { render, screen } from '@testing-library/react';

import { Movie } from './Movie';
import { fetchMovie } from '../services/movies';

jest.mock('react-router-dom', () => ({
  'useParams': () => ({ id: 123 }),
}));

describe('Movie component with MSW', () => {


  it('should display one movie', async () => {
    render(<Movie />);  // movies/123

    expect(await screen.findByText('Title: Miś powrót')).toBeInTheDocument();
  });

});