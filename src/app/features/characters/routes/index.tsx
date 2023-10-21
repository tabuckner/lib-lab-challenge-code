import { Route, Routes } from 'react-router-dom';
import { CharacterDetailsPage, CharactersListPage } from '../pages';

export const CHARACTERS_ROUTES = {
  ROOT: 'characters',
  DETAILS: ':id',
};

export const CharactersRoutes = () => {
  return (
    <Routes>
      <Route path={CHARACTERS_ROUTES.ROOT} element={<CharactersListPage />} />
      <Route path={`${CHARACTERS_ROUTES.ROOT}/${CHARACTERS_ROUTES.DETAILS}`} element={<CharacterDetailsPage />} />

    </Routes>
  );
};
