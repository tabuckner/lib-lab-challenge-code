import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { DetailsView } from '../../../../components/layout';
import { useCharacter } from '../../api';

export interface CharacterDetailsProps {
  characterID: string;
  onGoBack?: () => void;
}

export const CharacterDetails = ({
  characterID,
  onGoBack,
}: CharacterDetailsProps) => {
  // Dependencies
  const { data: character, isLoading } = useCharacter(characterID);

  return (
    <DetailsView
      isLoading={isLoading}
      actions={
        onGoBack ? <Button onClick={onGoBack}>Go Back To List</Button> : null
      }
    >
      <Typography variant="h2" gutterBottom>
        {character?.name}
      </Typography>
      <Typography variant="body1">
        Height: {character?.height || 'Unknown'}
      </Typography>
      <Typography variant="body1">
        Race: {character?.race || 'Unknown'}
      </Typography>
      <Typography variant="body1">
        Gender: {character?.gender || 'Unknown'}
      </Typography>
      <Typography variant="body1">
        Birth: {character?.birth || 'Unknown'}
      </Typography>
      <Typography variant="body1">
        Spouse: {character?.spouse || 'Unknown'}
      </Typography>
      <Typography variant="body1">
        Death: {character?.death || 'Unknown'}
      </Typography>
      <Typography variant="body1">
        Realm: {character?.realm || 'Unknown'}
      </Typography>
      <Typography variant="body1">
        Hair: {character?.hair || 'Unknown'}
      </Typography>
      <Typography variant="body1">
        Name: {character?.name || 'Unknown'}
      </Typography>
      <Typography>
        <Link href={character?.wikiUrl} target="_blank" rel="noopener">
          Wiki
        </Link>
      </Typography>
    </DetailsView>
  );
};
