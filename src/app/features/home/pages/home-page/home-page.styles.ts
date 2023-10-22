import styled from 'styled-components';

export const StyledHomePage = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;