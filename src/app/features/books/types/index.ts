import { BaseEntity, PaginatedAPIResponse } from '../../../types';

export type Book = {
  name: string;
} & BaseEntity;

export type Books = PaginatedAPIResponse<Book>;
