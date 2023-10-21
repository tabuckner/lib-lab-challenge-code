export type BaseEntity = {
  _id: string;
};

export type PaginatedAPIResponse<T> = {
  docs: Array<T>;
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
};