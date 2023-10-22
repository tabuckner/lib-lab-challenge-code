import { useQuery } from '@tanstack/react-query';
import { Books } from '../types';

export const BOOKS_QUERY_KEY = 'book';

export const useBooks = () => {
  return useQuery<Books>({
    queryKey: [BOOKS_QUERY_KEY],
  });
};
