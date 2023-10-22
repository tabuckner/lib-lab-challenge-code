import { BaseEntity, PaginatedAPIResponse } from '../../../types';

// eslint-disable-next-line @typescript-eslint/ban-types
export type Movie = {
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatoesScore: number;
} & BaseEntity;

export type Movies = PaginatedAPIResponse<Movie>;
