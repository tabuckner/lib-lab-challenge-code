import { useNavigate } from 'react-router-dom';
import { useGetIDFromRoute } from '../../../../hooks';
import { CHARACTERS_ROUTES } from '../../routes';
import { Typography, Button, Link } from '@mui/material';
import { DetailsView } from '../../../../components/layout';
import { useCharacter } from '../../api';

/* eslint-disable-next-line */
export interface CharacterDetailsPageProps { }

export const CharacterDetailsPage = (props: CharacterDetailsPageProps) => {
  // Dependencies
  const navigate = useNavigate();
  const characterID = useGetIDFromRoute(CHARACTERS_ROUTES.ROOT)
  const { data: character, isLoading } = useCharacter(characterID);

  // Handlers
  const handleClickGoBack = () => {
    navigate(`/${CHARACTERS_ROUTES.ROOT}`);
  }

  return (
    <DetailsView isLoading={isLoading}>
      <Typography variant='h2' gutterBottom>{character?.name}</Typography>
      <Typography variant='body1'>Height: {character?.height || 'Unknown'}</Typography>
      <Typography variant='body1'>Race: {character?.race || 'Unknown'}</Typography>
      <Typography variant='body1'>Gender: {character?.gender || 'Unknown'}</Typography>
      <Typography variant='body1'>Birth: {character?.birth || 'Unknown'}</Typography>
      <Typography variant='body1'>Spouse: {character?.spouse || 'Unknown'}</Typography>
      <Typography variant='body1'>Death: {character?.death || 'Unknown'}</Typography>
      <Typography variant='body1'>Realm: {character?.realm || 'Unknown'}</Typography>
      <Typography variant='body1'>Hair: {character?.hair || 'Unknown'}</Typography>
      <Typography variant='body1'>Name: {character?.name || 'Unknown'}</Typography>
      <Typography>
        <Link href={character?.wikiUrl} target="_blank" rel="noopener">
          Wiki
        </Link>
      </Typography>
      <Button onClick={handleClickGoBack}>Go Back To List</Button>
    </DetailsView>
  );
}
