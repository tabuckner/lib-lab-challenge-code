import { ListItem } from '../../../../components/elements';
import { ListView } from '../../../../components/layout';
import { useCharacters } from '../../api';

/* eslint-disable-next-line */
export interface CharactersListPageProps {}

export const CharactersListPage = (props: CharactersListPageProps) => {
  // Dependencies
  const { isLoading, data: characters } = useCharacters();

  return (
    <ListView isLoading={isLoading}>
      {characters?.docs.map((character) => (
        <ListItem
          key={character._id}
          entity={character}
          label={character.name}
        />
      ))}
    </ListView>
  );
};
