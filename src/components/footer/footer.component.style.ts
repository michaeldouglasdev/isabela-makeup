import styled from 'styled-components'
import { MenuItem } from '../menu/menu-item.component'
import { Menu } from '../menu/menu.component'
import { MenuContainer } from '../menu/menu.component.style'

export const FooterContainer = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.colors.black.dark};
  padding: 32px 64px;

  @media(max-width: 640px) {
    padding: 16px 32px;
  }
`

export const FooterSectionTitle = styled.h2`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 36px;

  @media(max-width: 640px) {
    text-align: center;
  }
`;

export const FooterLogoText = styled.span`
  flex: 1;
  color: ${({ theme }) => theme.colors.gray.regular};
`

export const FooterMenu = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: ${({ theme }) => theme.colors.gray.regular};
  height: 130px;
  flex-wrap: wrap;
  justify-content: center;

`

export const FooterMenuItem = styled.li`
  display: flex;
  margin-bottom: 16px;
  list-style-type: none;
`

export const FooterContact = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const FooterContactTitle = styled.h2`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const FooterContactItem = styled.div`
  display: flex;

  justify-content: flex-start;
`;

export const FooterContactItemText = styled.span`
  color: ${({ theme }) => theme.colors.gray.regular};
  font-size: 18px;
`;

export const FooterIcon = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 2px;
  margin-right: 16px;
`

export const FooterSeparator = styled.div`
  height: 1px;
  width: 100%;
  background: white;
  margin: 48px 0;
  opacity: 0.1;

  @media(max-width: 640px) {
    margin: 24px 0;
  }
`

export const FooterDisclaimerIcon = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`

export const FooterDisclaimer = styled.span`
  display: flex;
  justify-content: center;
  color: white;
  margin-bottom: 8px;
`;