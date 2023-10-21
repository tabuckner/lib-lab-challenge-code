import { Route, Routes } from 'react-router-dom';
import { MovieDetailsPage, MoviesListPage } from '../pages';

export const MOVIES_ROUTES = {
  ROOT: 'movies',
  DETAILS: ':id'
};

export const MoviesRoutes = () => {
  return (
    <Routes>
      <Route path={MOVIES_ROUTES.ROOT} element={<MoviesListPage />} />
      <Route path={`${MOVIES_ROUTES.ROOT}/${MOVIES_ROUTES.DETAILS}`} element={<MovieDetailsPage />} />
    </Routes>
  );
};