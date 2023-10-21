import { useQuery } from "@tanstack/react-query";
import { Movie } from "../types";
import { MOVIES_QUERY_KEY } from "./get-movies";
import { PaginatedAPIResponse } from "../../../types";

export const useMovie = (movieID: string) => {
  const response = useQuery<PaginatedAPIResponse<Movie>>({
    queryKey: [`${MOVIES_QUERY_KEY}/${movieID}`],
  });

  return {
    ...response,
    data: response.data?.docs[0] || undefined
  }
};
