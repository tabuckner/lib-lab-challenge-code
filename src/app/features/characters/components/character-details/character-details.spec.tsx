import { render } from '@testing-library/react';

import CharacterDetails from './character-details';

describe('CharacterDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CharacterDetails />);
    expect(baseElement).toBeTruthy();
  });
});
