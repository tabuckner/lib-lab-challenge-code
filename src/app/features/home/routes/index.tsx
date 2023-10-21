import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages';

export const HOME_ROUTES = {
  ROOT: 'home',
};

export const HomeRoutes = () => {
  return (
    <Routes>
      <Route path={HOME_ROUTES.ROOT} element={<HomePage />} />
    </Routes>
  );
};