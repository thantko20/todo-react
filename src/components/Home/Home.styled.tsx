import styled, { css, StyledProps } from 'styled-components';

interface TabProps {
  isActive: boolean;
}

export const StyledSidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: max-content;
`;

export const DefaultTab = styled.button<TabProps>`
  width: 200px;
  padding: 0.75rem 0.5rem;
  border-left: 4px solid transparent;
  text-align: left;
  font-weight: bold;
  transition: background-color 0.3s ease-in;
  border-top-right-radius: ${({ theme }) => theme.borderRadius.button};

  &:hover {
    color: ${({ theme }) => theme.colors.darkGray};
    background-color: ${({ theme }) => theme.colors.lightGray};
  }

  ${({ isActive, theme }) => {
    if (isActive) {
      return css`
        color: ${theme.colors.darkGray};
        border-left-color: ${theme.colors.primary.medium};
        background-color: ${theme.colors.lightGray};
        font-weight: bold;
      `;
    }
    return css`
      color: ${theme.colors.textGray};
      background-color: transparent;
    `;
  }}
`;

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
