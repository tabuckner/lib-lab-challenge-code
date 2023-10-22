import { RouteObject } from 'react-router-dom';
import { QuoteDetailsPage, QuotesListPage } from '../pages';

export const QUOTES_ROUTES = {
  ROOT: 'quotes',
  DETAILS: ':id'
};

export const quotesRoutes: Array<RouteObject> = [
  {
    path: QUOTES_ROUTES.ROOT,
    element: < QuotesListPage />,
  },
  {
    path: `${QUOTES_ROUTES.ROOT}/${QUOTES_ROUTES.DETAILS}`,
    element: < QuoteDetailsPage />,
  },
];