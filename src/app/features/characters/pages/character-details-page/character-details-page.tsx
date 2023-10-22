import { useNavigate } from 'react-router-dom';
import { useGetIDFromRoute } from '../../../../hooks';
import { CHARACTERS_ROUTES } from '../../routes';
import { CharacterDetails } from '../../components';

/* eslint-disable-next-line */
export interface CharacterDetailsPageProps {}

export const CharacterDetailsPage = (props: CharacterDetailsPageProps) => {
  // Dependencies
  const navigate = useNavigate();
  const characterID = useGetIDFromRoute(CHARACTERS_ROUTES.ROOT);

  // Handlers
  const handleClickGoBack = () => {
    navigate(`/${CHARACTERS_ROUTES.ROOT}`);
  };

  return (
    <CharacterDetails characterID={characterID} onGoBack={handleClickGoBack} />
  );
};
