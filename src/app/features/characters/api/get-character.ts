import { useQuery } from "@tanstack/react-query";
import { Character } from "../types";
import { PaginatedAPIResponse } from "../../../types";
import { CHARACTERS_QUERY_KEY } from "./get-characters";

export const useCharacter = (characterID: string) => {
  const response = useQuery<PaginatedAPIResponse<Character>>({
    queryKey: [`${CHARACTERS_QUERY_KEY}/${characterID}`],
  });

  return {
    ...response,
    data: response.data?.docs[0] || undefined
  }
};
