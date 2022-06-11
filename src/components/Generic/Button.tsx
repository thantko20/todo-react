import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary.lightest};
  font-size: 0.75rem;
  font-weight: bold;
  letter-spacing: 1.2px;
  padding: 0.75rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.primary.medium};
  transition: background-color 0.3s ease-out;
  border-radius: ${({ theme }) => theme.borderRadius.button};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }
`;

export default Button;
