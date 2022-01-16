import React from "react";
import { VSeparator } from "../grid/grid.component";
import { Logo } from "../logo/logo.component";
import { Menu } from "../menu/menu.component";
import { HeaderContainer } from "./header.component.style";

export const Header: React.FC = () => {
  return (
   <HeaderContainer>
     <Logo />
     <Menu></Menu>
   </HeaderContainer>
  )
}