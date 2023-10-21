import { ListView } from '../../../../components/layout';
import { useMovies } from '../../api';
import { MovieListItem } from '../../components';
import { StyledMoviesListPage } from './movies-list.styles';

/* eslint-disable-next-line */
export interface MoviesListPageProps { }

export const MoviesListPage = (props: MoviesListPageProps) => {
  // Dependencies
  const { isLoading, data } = useMovies();

  return (
    <StyledMoviesListPage>
      <ListView isLoading={isLoading}>{data?.docs.map(movie => <MovieListItem key={movie._id} movie={movie} />)}</ListView>
    </StyledMoviesListPage>
  );
}
