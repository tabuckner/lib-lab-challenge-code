import { StyledBooksList } from './books-list.styles';
import { Button } from '@mui/material';
import { useBooks } from '../../api';

/* eslint-disable-next-line */
export interface BooksListProps {}

export const BooksList = (props: BooksListProps) => {
  // Queries
  const { isPending, error, data, isFetching } = useBooks();

  return (
    <StyledBooksList>
      <h1>Welcome to BooksList!</h1>
      <Button variant="outlined">Outlined</Button>
      {!isPending && !isFetching && !error ? JSON.stringify(data) : null}
    </StyledBooksList>
  );
};
