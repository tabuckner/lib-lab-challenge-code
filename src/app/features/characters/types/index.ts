import { BaseEntity, PaginatedAPIResponse } from "../../../types";

export type Character = {
  height: string;
  race: string;
  gender: string;
  birth: string;
  spouse: string;
  death: string;
  realm: string;
  hair: string;
  name: string;
  wikiUrl: string;
} & BaseEntity;

export type Characters = PaginatedAPIResponse<Character>;
