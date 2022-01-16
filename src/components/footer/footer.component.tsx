import { AlignItems, HBox, JustifyContent, VBox, VSeparator } from "../grid/grid.component"
import { Logo } from "../logo/logo.component"
import { FooterContact, FooterContactItem, FooterIcon, FooterContactItemText, FooterContainer, FooterLogoText, FooterMenu, FooterMenuItem, FooterSectionTitle, FooterSeparator, FooterDisclaimer } from "./footer.component.style"
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
            <Logo />
          </FooterSectionTitle>

          <FooterLogoText>
            Etiam consequat sem ullamcorper, euismod metus sit amet, tristique justo. Vestibulum mattis, nisi ut faucibus commodo, risus ex commodo.
          </FooterLogoText>
        </VBox>

        <VBox expanded noSpacing>
          <FooterSectionTitle>
            Explorar
          </FooterSectionTitle>
          <FooterMenu>
            <FooterMenuItem>
              <FooterIcon>
                <FiChevronRight />
              </FooterIcon>
              Home
            </FooterMenuItem>

            <FooterMenuItem>
              <FooterIcon>
                <FiChevronRight />
              </FooterIcon>
              Sobre
            </FooterMenuItem>

            <FooterMenuItem>
              <FooterIcon>
                <FiChevronRight />
              </FooterIcon>
              Serviços
            </FooterMenuItem>

            <FooterMenuItem>
              <FooterIcon>
                <FiChevronRight />
              </FooterIcon>
              Galeria
            </FooterMenuItem>

            <FooterMenuItem>
              <FooterIcon>
                <FiChevronRight />
              </FooterIcon>
              Contato
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
                  (11) 97453-1457
                </FooterContactItemText>
              </FooterContactItem>

              <VSeparator small />
              <VSeparator small />

              <FooterContactItem>
                <FooterIcon>
                  <AiOutlineMail />
                </FooterIcon>
                <FooterContactItemText>
                  isalira_1113@gmail.com
                </FooterContactItemText>
              </FooterContactItem>

              <VSeparator small />
              <VSeparator small />

              <FooterContactItem>
                <FooterIcon>
                  <AiOutlineInstagram />
                </FooterIcon>
                <FooterContactItemText>
                  @isaa_lira
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