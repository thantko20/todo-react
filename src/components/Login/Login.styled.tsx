import styled from 'styled-components';

export const StyledLogin = styled.div`
  width: 100%;
  max-width: 60ch;
  margin: 0 auto;
  margin-top: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  h2 {
    color: ${({ theme }) => theme.colors.darkGray};
  }

  p {
    color: ${({ theme }) => theme.colors.textGray};
    margin-top: 0.5rem;
  }
`;
