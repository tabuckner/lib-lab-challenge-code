import { ListItem } from '../../../../components/elements';
import { ListView } from '../../../../components/layout';
import { useMovies } from '../../api';

/* eslint-disable-next-line */
export interface MoviesListPageProps { }

export const MoviesListPage = (props: MoviesListPageProps) => {
  // Dependencies
  const { isLoading, data } = useMovies();

  return (
    <ListView isLoading={isLoading}>{data?.docs.map(movie => <ListItem key={movie._id} entity={movie} label={movie.name} />)}</ListView>
  );
};
