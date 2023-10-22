import { useNavigate } from 'react-router-dom';
import { MOVIES_ROUTES } from '../../routes';
import { useGetIDFromRoute } from '../../../../hooks';
import { useMovie } from '../../api';
import { Button, Typography } from '@mui/material';
import { DetailsView } from '../../../../components/layout';

/* eslint-disable-next-line */
export interface MovieDetailsPageProps { }

export const MovieDetailsPage = (props: MovieDetailsPageProps) => {
  // Dependencies
  const navigate = useNavigate();
  const movieID = useGetIDFromRoute(MOVIES_ROUTES.ROOT)
  const { data: movie, isLoading } = useMovie(movieID);

  // Handlers
  const handleClickGoBack = () => {
    navigate(`/${MOVIES_ROUTES.ROOT}`);
  }

  return (
    <DetailsView isLoading={isLoading} actions={
      <Button onClick={handleClickGoBack}>Go Back To List</Button>
    }>
      <Typography variant='h2' gutterBottom>{movie?.name}</Typography>
      <Typography variant='body1'>Runtime in minutes: {movie?.runtimeInMinutes}</Typography>
      <Typography variant='body1'>Budget in millions: {movie?.budgetInMillions}</Typography>
      <Typography variant='body1'>Box office revenue in millions: {movie?.boxOfficeRevenueInMillions}</Typography>
      <Typography variant='body1'>Academy award nominations: {movie?.academyAwardNominations}</Typography>
      <Typography variant='body1'>Academy award wins: {movie?.academyAwardWins}</Typography>
      <Typography variant='body1'>Rotten tomatoes score: {movie?.rottenTomatoesScore}</Typography>
    </DetailsView>
  );
}
