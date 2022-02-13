import styled from "styled-components";


export const GalleryItemOverlaySearchIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  font-size: 0px;
  height: 0;
  width: 0;

  background: rgba(0, 0, 0, .5);
  color: white;

  transition: .3s;
`

interface GalleryItemProps {
  src?: string;
}
export const GalleryItemContainer = styled.div<GalleryItemProps>`
  background: ${({ src }) => `url(${src}) no-repeat center`};
  background-size: cover;
  height: 360px;
  width: calc(25% - 24px);
  margin: 8px 0;
  padding: 16px;
  position: relative;

  @media(max-width: 640px) {
    width: 100%;
  }
`;

export const GalleryItemOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
  border: 1px solid rgba(255,255,255,.2);
  transition: 0.3s;
  position: relative;

  &:hover {
    background: rgba(0, 0, 0, .2);
    &::before {
      border-color: white;
      width: 100%;
      height: 100%;
    }
    &::after {
      border-color: white;
      width: 100%;
      height: 100%;
    }

    ${GalleryItemOverlaySearchIcon} {
      height: 64px;
      width: 64px;
      font-size: 36px;
    }

  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    height: 0;
    width: 0;

    transition: width 0.3s, height 0.3s, border-color 0.3s;
    border-top: 1px solid transparent;
    border-left: 1px solid transparent;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;

    height: 0;
    width: 0;

    transition: width 0.3s, height 0.3s;
    border-right: 1px solid transparent;
    border-bottom: 1px solid transparent;
  }

`
