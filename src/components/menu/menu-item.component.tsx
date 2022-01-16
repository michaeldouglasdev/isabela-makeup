import { MenuItemContainer, MenuItemLink, MenuItemText } from "./menu-item.component.style"

interface MenuItemProps {
  text: string;
  light?: boolean;
  href?: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ text, href }) => {
  return (
    <MenuItemContainer>
      <MenuItemLink href={href}>
        <MenuItemText>
          {text}
        </MenuItemText>
      </MenuItemLink>
    </MenuItemContainer>
  )
}