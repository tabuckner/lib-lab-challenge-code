import { Route, Routes } from 'react-router-dom';
import { MoviesListPage } from '../pages';

export const MOVIES_ROUTES = {
  ROOT: 'movies',
};

export const MoviesRoutes = () => {
  return (
    <Routes>
      <Route path={MOVIES_ROUTES.ROOT} element={<MoviesListPage />} />
    </Routes>
  );
};