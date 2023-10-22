import { useQuery } from '@tanstack/react-query';
import { Quotes } from '../types';

export const QUOTES_QUERY_KEY = 'quote';

export const useQuotes = () => {
  return useQuery<Quotes>({
    queryKey: [QUOTES_QUERY_KEY],
  });
};
