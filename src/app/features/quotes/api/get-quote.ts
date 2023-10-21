import { useQuery } from "@tanstack/react-query";
import { Quote } from "../types";
import { PaginatedAPIResponse } from "../../../types";
import { QUOTES_QUERY_KEY } from "./get-quotes";

export const useQuote = (quoteID: string) => {
  const response = useQuery<PaginatedAPIResponse<Quote>>({
    queryKey: [`${QUOTES_QUERY_KEY}/${quoteID}`],
  });

  return {
    ...response,
    data: response.data?.docs[0] || undefined
  }
};
