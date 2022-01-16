import styled from 'styled-components';

export const MenuItemContainer = styled.li`
  padding: 24px 48px;
  list-style-type: none;

  @media(max-width: 640px) {
    &:not(:last-child) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
`;

export const MenuItemLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

interface MenuItemTextProps {
  light?: boolean;
}

export const MenuItemText = styled.span<MenuItemTextProps>`
  position: relative;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;

  color: inherit;

  &:hover {
    &::after {
      width: 100%;
    }
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    height: 3px;
    width: 0%;
    background: ${({ theme }) => theme.colors.primary};
    transition: 0.15s;

    border-radius: 2px;
  }

  @media(max-width: 640px) {
    font-size: 24px;
  }
`