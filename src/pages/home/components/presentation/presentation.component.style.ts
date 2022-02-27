import styled from 'styled-components';
import presentationImageLeft from '../../../../assets/home-makeup-brush.png';
import presentationImageRight from '../../../../assets/isabela-presentation.jpeg';
import logoRender from '../../../../assets/logo-render.png';

import { shade } from 'polished';

export const PresentationContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: calc(100vh - 83px);
  width: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  padding: 0 124px;

  @media(max-width: 640px) {
    padding: 0px;
  }

`

export const PresentationLogo = styled.div`
  height: 150px;
  width: 150px;
  background: url(${logoRender}) no-repeat center;
  background-size: cover;
  align-self: center;
`;

export const PresentationContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.large}px;
  align-items: stretch;

  @media(max-width: 640px) {
    flex-direction: column-reverse;
  }
`;

export const PresentationTitle = styled.h2`
  font-family: Prata;
  width: 600px;
  font-size: 60px;
  line-height: 70px;
  text-align: left;

  @media(max-width: 640px) {
    font-size: 32px;
    line-height: 36px;
    width: unset;
  }
`

export const PresentationSubtitle = styled.h3`
  font-size: 14px;
  width: 300px;
  color: ${({ theme }) => shade(0.6, theme.colors.secondary)};
`;

export const PresentationButton = styled.a`
  align-self: baseline;
  padding: 18px 32px;
  background: red;
  color: white;
  font-size: 24px;
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => `0 0 0 0 ${theme.colors.primary}`};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    transition: 1s;
    box-shadow: ${({ theme }) => `0 0 0 2em rgba(0, 0, 0, 0)`};
  }
`
export const PresentationImageLeft = styled.div`
  position: absolute;
  left: -96px;
  background: url(${presentationImageLeft}) no-repeat center;
  background-size: cover;
  height: 500px;
  width: 100%;
  max-width: 500px;
  opacity: 0.2;
  transform: rotate(45deg);
  user-select: none;
  pointer-events: none;
  @media(max-width: 640px) {
    left: -125px;
  }
`;

export const PresentationImageRight = styled.div`
  align-self: flex-end;
  background: url(${presentationImageRight}) no-repeat center;
  background-size: contain;
  height: 700px;
  width: 700px;

  @media(max-width: 640px) {
    height: 300px;
    width: 300px;
    z-index: 2;
    align-self: center;
  }

`;