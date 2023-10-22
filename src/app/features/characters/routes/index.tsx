import { RouteObject } from 'react-router-dom';
import { CharacterDetailsPage, CharactersListPage } from '../pages';

export const CHARACTERS_ROUTES = {
  ROOT: 'characters',
  DETAILS: ':id',
};

export const charactersRoutes: Array<RouteObject> = [
  {
    path: CHARACTERS_ROUTES.ROOT,
    element: <CharactersListPage />,
  },
  {
    path: `${CHARACTERS_ROUTES.ROOT}/${CHARACTERS_ROUTES.DETAILS}`,
    element: <CharacterDetailsPage />,
  },
];
