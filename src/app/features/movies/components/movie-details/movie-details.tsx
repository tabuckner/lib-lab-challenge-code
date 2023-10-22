import { useMovie } from '../../api';
import { Button, Typography } from '@mui/material';
import { DetailsView } from '../../../../components/layout';

export interface MovieDetailsProps {
  movieID: string;
  onGoBack?: () => void;
}

export const MovieDetails = ({ movieID, onGoBack }: MovieDetailsProps) => {
  // Dependencies
  const { data: movie, isLoading } = useMovie(movieID);

  return (
    <DetailsView isLoading={isLoading} actions={onGoBack ?
      <Button onClick={onGoBack}>Go Back To List</Button> : null
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
