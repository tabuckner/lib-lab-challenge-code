import { render } from '@testing-library/react';

import QuoteDetails from './quote-details';

describe('QuoteDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QuoteDetails />);
    expect(baseElement).toBeTruthy();
  });
});
