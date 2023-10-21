import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { APIRoute } from '../../types';

/* eslint-disable-next-line */
export interface ApiRouteCardProps {
  apiRoute: APIRoute;
  onClick: (apiRoute: APIRoute) => void;
}

export const ApiRouteCard = ({ apiRoute, onClick }: ApiRouteCardProps) => {
  // Handlers
  const handleClick = () => {
    onClick(apiRoute);
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          API Route
        </Typography>
        <Typography variant="h5" component="div">
          {apiRoute.displayName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>Browse</Button>
      </CardActions>
    </Card>
  );
}
