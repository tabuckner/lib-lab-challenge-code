import { Navigate, Route, Routes } from 'react-router-dom';
import { HOME_ROUTES } from './features/home';

export const DEFAULT_APP_ROUTE = HOME_ROUTES.ROOT;

export const APP_ROUTES = {
  ROOT: '/',
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={APP_ROUTES.ROOT} element={<Navigate to={DEFAULT_APP_ROUTE} />} />
    </Routes>
  );
};