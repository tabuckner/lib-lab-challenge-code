import { render } from '@testing-library/react';

import { QuoteDetailsPage } from './quote-details-page';

describe('QuoteDetailsPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QuoteDetailsPage />);
    expect(baseElement).toBeTruthy();
  });
});
