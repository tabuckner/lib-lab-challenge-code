import { StyledApp } from './app.styles';
import NxWelcome from './nx-welcome';
import { Button } from '@mui/material';

export function App() {
  return (
    <StyledApp>
      <Button variant="outlined">Outlined</Button>
      <NxWelcome title="the-one-api-fe" />
    </StyledApp>
  );
}

export default App;
