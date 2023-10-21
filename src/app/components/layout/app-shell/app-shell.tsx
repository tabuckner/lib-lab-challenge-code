import { ReactNode } from 'react';
import { CssBaseline, AppBar, Toolbar } from '@mui/material';
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
  }

  return (
    <StyledAppShell>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <StyledBrand variant="h6" color="inherit" noWrap onClick={handleClick}>
            The One API Browser
          </StyledBrand>
        </Toolbar>
      </AppBar>
      <StyledMain>
        {children}
      </StyledMain>
    </StyledAppShell>
  );
};
