import React from "react";
import { AlignItems, JustifyContent, VBox, VSeparator } from "../../../../components/grid/grid.component";
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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
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
      </FeedbackItemWrapper>

      <VSeparator />
    </FeedbackContainer>
  )
}