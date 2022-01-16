import { MenuItem } from "./menu-item.component"
import { MenuContainer, MenuMenu, MenuToggle } from "./menu.component.style"
import {AiOutlineMenu} from 'react-icons/ai';
import { useState } from "react";

interface MenuProps {
  light?: boolean;
  vertical?: boolean;
}

export const Menu: React.FC<MenuProps> = ({ light, vertical }) => {

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleToggle = () => {
    setShowMenu(!showMenu);
  }

  return (
    <MenuContainer>
      <MenuToggle onClick={handleToggle}>
        <AiOutlineMenu />
      </MenuToggle>

      <MenuMenu light={light} vertical={vertical} show={showMenu}>
        <MenuItem text='Home' href='#home' />
        <MenuItem text='Sobre' href='#about' />
        <MenuItem text='Produtos' href='#products' />
        <MenuItem text='Galeria' href='#gallery' />
        <MenuItem text='Contato' href='#contact' />
      </MenuMenu>
    </MenuContainer>
  )
}