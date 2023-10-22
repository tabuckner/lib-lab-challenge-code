import { BaseEntity } from '../../../types';
import { useNavigate } from 'react-router-dom';
import { CardContent, Typography, CardActions, Button } from '@mui/material';
import { StyledListItem } from './list-item.styles';

export interface ListItemProps {
  label: string;
  entity: BaseEntity;
}

export const ListItem = ({ label, entity }: ListItemProps) => {
  // Dependencies
  const navigate = useNavigate();

  // Handlers
  const handleClick = () => {
    navigate(`./${entity._id}`);
  };

  return (
    <StyledListItem>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {label}
        </Typography>
        <Typography variant="h5" component="div"></Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>
          Go To Details
        </Button>
      </CardActions>
    </StyledListItem>
  );
};
