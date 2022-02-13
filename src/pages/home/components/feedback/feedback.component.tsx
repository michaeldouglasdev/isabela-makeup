import React from "react";
import { AlignItems, VBox, VSeparator } from "../../../../components/grid/grid.component";
import { FeedbackContainer, FeedbackItem, FeedbackItemClient, FeedbackItemClientImage, FeedbackItemClientName, FeedbackItemQuote, FeedbackItemText, FeedbackItemWrapper } from "./feedback.component.style";
import { FaQuoteLeft } from 'react-icons/fa';
import { SectionCaption, SectionTitle } from "../../../../components/typography/typography.style";

export const Feedback: React.FC = () => {

  return (
    <FeedbackContainer id="about">
      <SectionTitle>Testemunhas</SectionTitle>
      <SectionCaption>O que os clientes disseram</SectionCaption>

      <VSeparator />
      <FeedbackItemWrapper>
        <FeedbackItem>
          <FeedbackItemQuote>
            <FaQuoteLeft />
          </FeedbackItemQuote>

          <FeedbackItemText>
            Primeira vez que faço maquiagem com uma profissional e me surpreendi muito, todo atendimento e a atenção que recebi foi incrível, além de claro, o resultado da make que ficou exatamente como eu queria.
          </FeedbackItemText>

          <VSeparator />

          <FeedbackItemClient>
            <VBox alignItems={AlignItems.CENTER} noSpacing>
              <FeedbackItemClientImage />

              <VSeparator small />
              <VSeparator small />
              <FeedbackItemClientName>
                Clara Macedo
              </FeedbackItemClientName>
            </VBox>

          </FeedbackItemClient>
        </FeedbackItem>

        <FeedbackItem>
          <FeedbackItemQuote>
            <FaQuoteLeft />
          </FeedbackItemQuote>
          <FeedbackItemText>
            A Isabela promete uma maquiagem de alto padrão e realmente, tanto os produtos como as técnicas utilizdas por ela são de extrema qualidade, amei a make e durou o dia todo.
          </FeedbackItemText>

          <VSeparator />

          <FeedbackItemClient>
            <VBox alignItems={AlignItems.CENTER} noSpacing>

              <FeedbackItemClientImage />

              <VSeparator small />
              <VSeparator small />
              <FeedbackItemClientName>
                Ana Ribeiro
              </FeedbackItemClientName>
            </VBox>
          </FeedbackItemClient>
        </FeedbackItem>

        <FeedbackItem>
          <FeedbackItemQuote>
            <FaQuoteLeft />
          </FeedbackItemQuote>

          <FeedbackItemText>
          Superou todas as minhas expectativas! A maquiagem blindada feita pela Isabela é realmente resistente a lágrimas e atrito, minha maquiagem durou a minha formatura toda, cheguei em casa com a amake intacta.
          </FeedbackItemText>

          <VSeparator />

          <FeedbackItemClient>
            <VBox alignItems={AlignItems.CENTER} noSpacing>
              <FeedbackItemClientImage />

              <VSeparator small />
              <VSeparator small />
              <FeedbackItemClientName>
                Maria Eduarda
              </FeedbackItemClientName>
            </VBox>

          </FeedbackItemClient>
        </FeedbackItem>
      </FeedbackItemWrapper>

      <VSeparator />
    </FeedbackContainer>
  )
}