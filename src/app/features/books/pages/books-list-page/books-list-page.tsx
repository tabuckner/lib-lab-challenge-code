import { BooksList } from '../../components';
import { StyledBooksListPage } from './books-list-page.styles';

/* eslint-disable-next-line */
export interface BooksListPageProps {}

export const BooksListPage = (props: BooksListPageProps) => {
  return (
    <StyledBooksListPage>
      <h1>BooksListPage</h1>
      <BooksList />
    </StyledBooksListPage>
  );
};
