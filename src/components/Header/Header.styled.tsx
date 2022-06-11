import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  background-color: white;
  height: 5rem;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderRight = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
`;

export const HeaderLeft = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const MeunButton = styled.button`
  height: 2.2rem;
  width: 2.2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export const Logo = styled.div`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -1px;
`;

export const SAccountAvatar = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }

  span {
    font-size: 0.75rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textGray};
  }

  @media (max-width: 760px) {
    span {
      display: none;
    }
  }
`;
