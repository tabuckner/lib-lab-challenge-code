import { Route, Routes } from 'react-router-dom';
import { CharactersListPage } from '../pages';

export const CHARACTERS_ROUTES = {
  ROOT: 'characters',
};

export const CharactersRoutes = () => {
  return (
    <Routes>
      <Route path={CHARACTERS_ROUTES.ROOT} element={<CharactersListPage />} />
    </Routes>
  );
};