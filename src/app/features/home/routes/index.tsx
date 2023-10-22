import { RouteObject } from 'react-router-dom';
import { HomePage } from '../pages';

export const HOME_ROUTES = {
  ROOT: 'home',
};

export const homeRoutes: Array<RouteObject> = [
  {
    path: HOME_ROUTES.ROOT,
    element: <HomePage />,
  },
];
