import styled from 'styled-components';

import NxWelcome from './nx-welcome';
import { Button } from '@mui/material';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Button variant="outlined">Outlined</Button>
      <NxWelcome title="the-one-api-fe" />
    </StyledApp>
  );
}

export default App;
