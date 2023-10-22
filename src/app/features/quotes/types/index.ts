import { BaseEntity, PaginatedAPIResponse } from '../../../types';

export type Quote = {
  dialog: string;
  movie: string;
  character: string;
  id: string;
} & BaseEntity;

export type Quotes = PaginatedAPIResponse<Quote>;
