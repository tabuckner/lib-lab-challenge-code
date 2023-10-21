import { Route, Routes } from 'react-router-dom';
import { QuotesListPage } from '../pages';

export const QUOTES_ROUTES = {
  ROOT: 'quotes',
};

export const QuotesRoutes = () => {
  return (
    <Routes>
      <Route path={QUOTES_ROUTES.ROOT} element={<QuotesListPage />} />
    </Routes>
  );
};