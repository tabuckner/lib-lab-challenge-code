import { render } from '@testing-library/react';

import { BooksListPage } from './books-list-page';

describe('BooksListPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BooksListPage />);
    expect(baseElement).toBeTruthy();
  });
});
