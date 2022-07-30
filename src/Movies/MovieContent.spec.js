import { render, screen } from '@testing-library/react';

import { MovieContent } from './MovieContent';

describe('MovieComponent', () => {
  it('Should display title with prefix', () => {
    const mockMovie = {
      fields: {
        name: 'Miś',
        description: 'Super stary film',
      }
    };
    render(<MovieContent movie={mockMovie} />);

    expect(screen.getByText('Title: Miś')).toBeInTheDocument();
    // screen.getByText('Title: Miś');
  });
});