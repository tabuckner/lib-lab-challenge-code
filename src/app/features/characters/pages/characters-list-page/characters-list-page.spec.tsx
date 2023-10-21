import { render } from '@testing-library/react';

import CharactersListPage from './characters-list-page';

describe('CharactersListPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CharactersListPage />);
    expect(baseElement).toBeTruthy();
  });
});
