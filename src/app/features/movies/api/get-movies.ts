import { useQuery } from "@tanstack/react-query";
import { Movies } from "../types";

export const MOVIES_QUERY_KEY = 'movie';

export const useMovies = () => {
  return useQuery<Movies>({
    queryKey: [MOVIES_QUERY_KEY],
  });
};
