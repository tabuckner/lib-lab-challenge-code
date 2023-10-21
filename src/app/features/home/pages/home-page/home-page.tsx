import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { CardsContainer, StyledHomePage, StyledMain } from "./home-page.styles";
import { APIRoute } from '../../types';
import { ApiRouteCard } from '../../components';
import { useNavigate } from 'react-router-dom';
import { API_ROUTES } from '../../constants';

export const HomePage = () => {
  // Dependencies
  const navigate = useNavigate();

  // Handlers 
  const handleAPIRouteCardClick = (nextAPIRoute: APIRoute) => {
    navigate(`/${nextAPIRoute.appRoute}`);
  }

  return (
    <StyledHomePage>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            The One API Browser
          </Typography>
        </Toolbar>
      </AppBar>
      <StyledMain>
        <Typography variant="h2" gutterBottom>
          Welcome to The One API Browser!
        </Typography>
        <CardsContainer>
          {API_ROUTES.map(apiRoute => <ApiRouteCard apiRoute={apiRoute} onClick={handleAPIRouteCardClick} />)}
        </CardsContainer>
      </StyledMain>
    </StyledHomePage>
  );
}
