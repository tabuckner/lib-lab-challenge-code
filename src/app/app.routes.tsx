import { useRoutes } from 'react-router-dom';
import { HOME_ROUTES, /* HomeRoutes */ homeRoutes } from './features/home';
import { moviesRoutes } from './features/movies';
import { charactersRoutes } from './features/characters';
import { quotesRoutes } from './features/quotes';

export const DEFAULT_APP_ROUTE = HOME_ROUTES.ROOT;

export const APP_ROUTES = {
  ROOT: '/',
};

export const AppRoutes = () => {
  const appRoutesElement = useRoutes([
    ...homeRoutes,
    ...moviesRoutes,
    ...quotesRoutes,
    ...charactersRoutes,
  ]);

  return appRoutesElement;
};
