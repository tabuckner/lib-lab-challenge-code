import { MOVIES_ROUTES } from '../../routes';
import { useNavigate } from 'react-router-dom';
import { useGetIDFromRoute } from '../../../../hooks';
import { MovieDetails } from '../../components';

/* eslint-disable-next-line */
export interface MovieDetailsPageProps {}

export const MovieDetailsPage = (props: MovieDetailsPageProps) => {
  // Dependencies
  const navigate = useNavigate();
  const movieID = useGetIDFromRoute(MOVIES_ROUTES.ROOT);

  // Handlers
  const handleClickGoBack = () => {
    navigate(`/${MOVIES_ROUTES.ROOT}`);
  };

  return <MovieDetails movieID={movieID} onGoBack={handleClickGoBack} />;
};
