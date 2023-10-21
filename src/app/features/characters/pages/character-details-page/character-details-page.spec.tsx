import { render } from '@testing-library/react';

import CharacterDetailsPage from './character-details-page';

describe('CharacterDetailsPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CharacterDetailsPage />);
    expect(baseElement).toBeTruthy();
  });
});
