// import { BOOKS_QUERY_KEY, BOOKS_ROUTES } from "../../books";
import { CHARACTERS_QUERY_KEY, CHARACTERS_ROUTES } from "../../characters";
import { MOVIES_QUERY_KEY, MOVIES_ROUTES } from "../../movies";
import { QUOTES_QUERY_KEY, QUOTES_ROUTES } from "../../quotes";
import { APIRoute } from "../types";

export const API_ROUTES: Array<APIRoute> = [
  {
    displayName: 'Movies',
    apiRoute: MOVIES_QUERY_KEY,
    appRoute: MOVIES_ROUTES.ROOT,
  },
  {
    displayName: 'Characters',
    apiRoute: CHARACTERS_QUERY_KEY,
    appRoute: CHARACTERS_ROUTES.ROOT,
  },
  {
    displayName: 'Quotes',
    apiRoute: QUOTES_QUERY_KEY,
    appRoute: QUOTES_ROUTES.ROOT,
  },
  // {
  //   displayName: 'Books',
  //   apiRoute: BOOKS_QUERY_KEY,
  //   appRoute: BOOKS_ROUTES.ROOT,
  // }
];