import { BOOKS_QUERY_KEY, BOOKS_ROUTES } from "../../books";
import { APIRoute } from "../types";

export const API_ROUTES: Array<APIRoute> = [
  {
    displayName: 'Movies',
    apiRoute: 'movie',
    appRoute: ''
  },
  {
    displayName: 'Characters',
    apiRoute: 'character',
    appRoute: ''
  },
  {
    displayName: 'Quotes',
    apiRoute: 'quote',
    appRoute: ''
  },
  {
    displayName: 'Books',
    apiRoute: BOOKS_QUERY_KEY,
    appRoute: BOOKS_ROUTES.ROOT
  }
];