import { render } from '@testing-library/react';

import { ApiRouteCard } from './api-route-card';
import { API_ROUTES } from '../../constants';

describe('ApiRouteCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ApiRouteCard apiRoute={API_ROUTES[0]} onClick={() => true} />
    );
    expect(baseElement).toBeTruthy();
  });
});
