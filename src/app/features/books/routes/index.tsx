import { Route, Routes } from 'react-router-dom';
import { BooksListPage } from '../pages';

export const BOOKS_ROUTES = {
  ROOT: 'books',
};

export const BooksRoutes = () => {
  return (
    <Routes>
      <Route path={BOOKS_ROUTES.ROOT} element={<BooksListPage />} />
    </Routes>
  );
};
