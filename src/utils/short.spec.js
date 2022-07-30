import { short } from './short';

describe('Short', () => {
  it('should cut text when is longer than 25 characters', () => {
    let result = short('Szkoła Reacta');

    expect(result).toBe('Szkoła Reacta');

    result = short('Szkoła Reacta lorem ipsum cośtam cośtam');
    expect(result).toBe('Szkoła Reacta lorem ipsum...');
  });

  it('when pass second argument it should be considered', () => {
    const result = short('Szkoła Reacta', 3);
    expect(result).toBe('Szk...');
  });
});