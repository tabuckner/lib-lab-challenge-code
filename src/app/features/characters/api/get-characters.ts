import { useQuery } from "@tanstack/react-query";
import { Characters } from "../types";

export const CHARACTERS_QUERY_KEY = 'character';

export const useCharacters = () => {
  return useQuery<Characters>({
    queryKey: [CHARACTERS_QUERY_KEY],
  });
};
