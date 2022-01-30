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
        <MenuItem text='Home' href='#home'  />
        <MenuItem text='Sobre' href='#about' onClick={handleToggle} />
        <MenuItem text='Produtos' href='#products' onClick={handleToggle} />
        <MenuItem text='Galeria' href='#gallery' onClick={handleToggle} />
        <MenuItem text='Contato' href='#contact' onClick={handleToggle} />
      </MenuMenu>
    </MenuContainer>
  )
}