import { render } from '@testing-library/react';

import { RelatedResourceSection } from './related-resource-section';

describe('RelatedResourceSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RelatedResourceSection children={<div></div>} label='test' />);
    expect(baseElement).toBeTruthy();
  });
});
