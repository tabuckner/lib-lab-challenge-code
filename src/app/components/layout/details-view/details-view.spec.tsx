import { render } from '@testing-library/react';

import { DetailsView } from './details-view';

describe('DetailsView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <DetailsView
        actions={<div></div>}
        children={<div></div>}
        isLoading={false}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
