import { render } from '@testing-library/react';

import { QuotesListPage } from './quotes-list-page';

describe('QuotesListPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QuotesListPage />);
    expect(baseElement).toBeTruthy();
  });
});
