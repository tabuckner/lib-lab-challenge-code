import { Navigate, useRoutes } from 'react-router-dom';
import { HOME_ROUTES, homeRoutes } from './features/home';
import { moviesRoutes } from './features/movies';
import { charactersRoutes } from './features/characters';
import { quotesRoutes } from './features/quotes';

export const DEFAULT_APP_ROUTE = HOME_ROUTES.ROOT;

export const APP_ROUTES = {
  ROOT: '/',
};

export const AppRoutes = () => {
  const appRoutesElement = useRoutes([
    {
      path: APP_ROUTES.ROOT,
      element: <Navigate to={`./${HOME_ROUTES.ROOT}`} />
    },
    ...homeRoutes,
    ...moviesRoutes,
    ...quotesRoutes,
    ...charactersRoutes,
    {
      path: '*',
      element: <Navigate to={`./${HOME_ROUTES.ROOT}`} />
    }
  ]);

  return appRoutesElement;
};
