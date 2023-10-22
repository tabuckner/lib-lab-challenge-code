import { render } from '@testing-library/react';

import { CharacterDetails } from './character-details';
import { mockAppQueryClient } from '../../../../../client';
import { QueryClientProvider } from '@tanstack/react-query';

describe('CharacterDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <QueryClientProvider client={mockAppQueryClient}>
        <CharacterDetails characterID="test" onGoBack={() => true} />
      </QueryClientProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
