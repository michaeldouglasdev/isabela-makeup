import React from "react";
import { Footer } from "../footer/footer.component";
import { Header } from "../header/header.component";
import { LayoutContainer } from "./layout.component.style";

export const Layout: React.FC = ({ children }) => {
  return (
    <LayoutContainer>
      <Header></Header>
      { children }
      <Footer/>
    </LayoutContainer>
  )
}