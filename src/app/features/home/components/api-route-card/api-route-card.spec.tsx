import { render } from '@testing-library/react';

import ApiRouteCard from './api-route-card';

describe('ApiRouteCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApiRouteCard />);
    expect(baseElement).toBeTruthy();
  });
});
