import React from "react";
import { VBox, VSeparator } from "../../../../components/grid/grid.component";
import { PresentationButton, PresentationContainer, PresentationImageLeft, PresentationImageRight, PresentationLogo, PresentationSubtitle, PresentationTitle, PresentationContentWrapper } from "./presentation.component.style";

export const Presentation: React.FC = () => {
  return (
    <PresentationContainer id="#home">
      <PresentationImageLeft />

      <PresentationContentWrapper>
        <VBox>
          <PresentationLogo>
            Isabela Makeup
          </PresentationLogo>

          <PresentationTitle>
            Maquiagem de alto padrão, para seu estilo único
          </PresentationTitle>

          <VSeparator />

          <PresentationSubtitle>
            Para propor uma melhor experiência, trabalhamos com as melhores maquiagens
            Entre em contato no botão abaixo
          </PresentationSubtitle>

          <VSeparator />
          <PresentationButton href="https://api.whatsapp.com/send?phone=5511974531457&text=Olá, Isabela!">
            Contatar Isabela
          </PresentationButton>
        </VBox>

        <PresentationImageRight />
      </PresentationContentWrapper>
    </PresentationContainer>
  )
}