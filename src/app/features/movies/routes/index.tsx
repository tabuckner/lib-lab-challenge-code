import { RouteObject } from 'react-router-dom';
import { MovieDetailsPage, MoviesListPage } from '../pages';

export const MOVIES_ROUTES = {
  ROOT: 'movies',
  DETAILS: ':id',
};

export const moviesRoutes: Array<RouteObject> = [
  {
    path: MOVIES_ROUTES.ROOT,
    element: <MoviesListPage />,
  },
  {
    path: `${MOVIES_ROUTES.ROOT}/${MOVIES_ROUTES.DETAILS}`,
    element: <MovieDetailsPage />,
  },
];
