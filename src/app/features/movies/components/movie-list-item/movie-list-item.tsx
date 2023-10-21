import styled from 'styled-components';
import { Movie } from '../../types';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface MovieListItemProps {
  movie: Movie;
}

const StyledMovieListItem = styled(Card)`
  width: 100%;
  flex-shrink: 0;
`;

export const MovieListItem = ({ movie }: MovieListItemProps) => {
  // Dependencies
  const navigate = useNavigate();

  // Handlers
  const handleClick = () => {
    navigate(`./${movie._id}`)
  }

  return (
    <StyledMovieListItem>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {movie.name}
        </Typography>
        <Typography variant="h5" component="div">
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>Go To Details</Button>
      </CardActions>

    </StyledMovieListItem>
  );
}
