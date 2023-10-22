import { render } from '@testing-library/react';

import { ListView } from './list-view';

describe('ListView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListView children={<div></div>} isLoading={false} />);
    expect(baseElement).toBeTruthy();
  });
});
