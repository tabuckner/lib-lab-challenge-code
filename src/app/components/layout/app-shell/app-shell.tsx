import { ReactNode } from 'react';
import { CssBaseline, AppBar, Toolbar, Typography } from '@mui/material';
import { StyledAppShell, StyledMain } from './app-shell.styles';

export interface AppShellProps {
  children: ReactNode;
}

export const AppShell = ({ children }: AppShellProps) => {
  return (
    <StyledAppShell>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            The One API Browser
          </Typography>
        </Toolbar>
      </AppBar>
      <StyledMain>
        {children}
      </StyledMain>
    </StyledAppShell>
  );
}
