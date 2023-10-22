import { ReactNode } from 'react';
import { CssBaseline, AppBar, Toolbar, Typography } from '@mui/material';
import { StyledAppShell, StyledBrand, StyledMain } from './app-shell.styles';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTES } from '../../../features/home';

export interface AppShellProps {
  children: ReactNode;
}

export const AppShell = ({ children }: AppShellProps) => {
  // Dependencies
  const navigate = useNavigate();

  // Handlers
  const handleClick = () => {
    return navigate(`/${HOME_ROUTES.ROOT}`);
  };

  return (
    <StyledAppShell>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap marginRight={'1rem'}>
            The One API Browser
          </Typography>
          <StyledBrand onClick={handleClick}>Home</StyledBrand>
        </Toolbar>
      </AppBar>
      <StyledMain>{children}</StyledMain>
    </StyledAppShell>
  );
};
