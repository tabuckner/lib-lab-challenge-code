import styled from 'styled-components';

/* eslint-disable-next-line */
export interface QuotesListPageProps {}

const StyledQuotesListPage = styled.div`
  color: pink;
`;

export const QuotesListPage = (props: QuotesListPageProps) =>  {
  return (
    <StyledQuotesListPage>
      <h1>Welcome to QuotesListPage!</h1>
    </StyledQuotesListPage>
  );
}
