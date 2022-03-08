import { AlignItems, HBox, JustifyContent, VBox, VSeparator } from "../grid/grid.component"
import { FooterContact, FooterContactItem, FooterIcon, FooterContactItemText, FooterContainer, FooterMenu, FooterMenuItem, FooterSectionTitle, FooterSeparator, FooterDisclaimer, FooterMenuItemLink, FooterContactItemTextLink } from "./footer.component.style"
import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail, AiOutlineInstagram, AiOutlineCopyrightCircle } from 'react-icons/ai';
import { FiChevronRight } from 'react-icons/fi';

export const Footer: React.FC = () => {
  return (
    <FooterContainer id="contact">

      <FooterSeparator />

      <HBox alignItems={AlignItems.FLEX_START} gap={64}>
        <VBox expanded noSpacing>
          <FooterSectionTitle>
            Explorar
          </FooterSectionTitle>
          <FooterMenu>
            <FooterMenuItem>
              <FooterIcon>
                <FiChevronRight />
              </FooterIcon>

              <FooterMenuItemLink href="#home">
                Home
              </FooterMenuItemLink>
            </FooterMenuItem>

            <FooterMenuItem>
              <FooterIcon>
                <FiChevronRight />
              </FooterIcon>

              <FooterMenuItemLink href="#about">
                Sobre
              </FooterMenuItemLink>
            </FooterMenuItem>

            <FooterMenuItem>
              <FooterIcon>
                <FiChevronRight />
              </FooterIcon>

              <FooterMenuItemLink href="#products">
                Produtos
              </FooterMenuItemLink>

            </FooterMenuItem>

            <FooterMenuItem>
              <FooterIcon>
                <FiChevronRight />
              </FooterIcon>

              <FooterMenuItemLink href="#gallery">
                Galeria
              </FooterMenuItemLink>
            </FooterMenuItem>

            <FooterMenuItem>
              <FooterIcon>
                <FiChevronRight />
              </FooterIcon>

              <FooterMenuItemLink href="#contact">
                Contato
              </FooterMenuItemLink>
            </FooterMenuItem>
          </FooterMenu>
        </VBox>

        <VBox expanded noSpacing>
          <FooterContact>
            <VBox justifyContent={JustifyContent.CENTER} noSpacing>
              <FooterSectionTitle>
                Contato
              </FooterSectionTitle>
              <FooterContactItem>
                <FooterIcon>
                  <FaWhatsapp />
                </FooterIcon>
                <FooterContactItemText>
                <FooterContactItemTextLink href="https://api.whatsapp.com/send?phone=5511974231457&text=Olá, Isabela! Gostaria de fazer um orçamento">
                  (11) 97423-1457
                </FooterContactItemTextLink>
                </FooterContactItemText>
              </FooterContactItem>

              <VSeparator small />
              <VSeparator small />

              <FooterContactItem>
                <FooterIcon>
                  <AiOutlineMail />
                </FooterIcon>
                <FooterContactItemText>
                  <FooterContactItemTextLink>
                    isalira_1113@gmail.com
                  </FooterContactItemTextLink>
                </FooterContactItemText>
              </FooterContactItem>

              <VSeparator small />
              <VSeparator small />

              <FooterContactItem>
                <FooterIcon>
                  <AiOutlineInstagram />
                </FooterIcon>
                <FooterContactItemText>
                <FooterContactItemTextLink href="https://instagram.com/isaa_lira">
                  @isaa_lira
                </FooterContactItemTextLink>
                </FooterContactItemText>
              </FooterContactItem>
            </VBox>
          </FooterContact>
        </VBox>
      </HBox>

      <FooterSeparator />

      <FooterDisclaimer>
        <FooterIcon>
          <AiOutlineCopyrightCircle />
        </FooterIcon>

        Todos os Direitos Reservados - 2022
      </FooterDisclaimer>
    </FooterContainer>
  )
}