import styled, { css } from 'styled-components';
import makeupMenuBackground from '../../assets/makeup-menu-background.png';

interface MenuProps {
  light?: boolean;
  vertical?: boolean;
  show?: boolean;
}

export const MenuContainer = styled.div`
  display: flex;
  flex: 1;
  z-index: 10;
  position: relative;

  @media(max-width: 640px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;
export const MenuMenu = styled.ul<MenuProps>`
  display: flex;
  flex-direction: ${({ vertical }) => vertical ? 'column' : 'row'};
  color: ${({ light }) => light ? 'white' : 'black'};
  overflow: hidden;
  transition: 0.3s;

  @media(max-width: 640px) {
    position: fixed;
    flex-direction: column;
    top: 71px;
    height: 100vh;
    right: -100vw;
    width: 100vw;
    background: #141414;
    color: ${({ theme }) => theme.colors.primary};
    padding-top: 24px;

    ${({ show }) => show ?
        css`
          right: 0;
        `
        :
        css`

        `
    }

    /*&:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      background: url(${makeupMenuBackground}) no-repeat center;
      background-size: cover;
    }*/
  }
`;

export const MenuToggle = styled.div`
  display: none;
  font-size: 24px;
  @media(max-width: 640px) {
    display: flex;
  }
`