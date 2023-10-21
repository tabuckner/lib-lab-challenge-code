import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MoviesListPageProps {}

const StyledMoviesListPage = styled.div`
  color: pink;
`;

export const MoviesListPage = (props: MoviesListPageProps) => {
  return (
    <StyledMoviesListPage>
      <h1>Welcome to MoviesListPage!</h1>
    </StyledMoviesListPage>
  );
}
