import { render } from '@testing-library/react';

import { RelatedResourceSection } from './related-resource-section';

describe('RelatedResourceSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RelatedResourceSection />);
    expect(baseElement).toBeTruthy();
  });
});
