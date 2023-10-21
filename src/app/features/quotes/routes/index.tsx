import { Route, Routes } from 'react-router-dom';
import { QuoteDetailsPage, QuotesListPage } from '../pages';

export const QUOTES_ROUTES = {
  ROOT: 'quotes',
  DETAILS: ':id'
};

export const QuotesRoutes = () => {
  return (
    <Routes>
      <Route path={QUOTES_ROUTES.ROOT} element={<QuotesListPage />} />
      <Route path={`${QUOTES_ROUTES.ROOT}/${QUOTES_ROUTES.DETAILS}`} element={<QuoteDetailsPage />} />
    </Routes>
  );
};