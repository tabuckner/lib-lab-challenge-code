import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CharactersListPageProps {}

const StyledCharactersListPage = styled.div`
  color: pink;
`;

export const CharactersListPage = (props: CharactersListPageProps) => {
  return (
    <StyledCharactersListPage>
      <h1>Welcome to CharactersListPage!</h1>
    </StyledCharactersListPage>
  );
}
