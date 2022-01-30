import { MenuItemContainer, MenuItemLink, MenuItemText } from "./menu-item.component.style"

interface MenuItemProps {
  text: string;
  light?: boolean;
  href?: string;
  onClick?: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({ text, href, onClick }) => {
  return (
    <MenuItemContainer>
      <MenuItemLink href={href} onClick={onClick}>
        <MenuItemText>
          {text}
        </MenuItemText>
      </MenuItemLink>
    </MenuItemContainer>
  )
}