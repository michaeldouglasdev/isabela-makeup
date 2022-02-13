import styled from 'styled-components';

export const GalleryContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 64px;

  @media(max-width: 640px) {
    padding: 32px 16px;
  }
`;


export const GalleryItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: space-between;
  width: 100%;

  @media(max-width: 640px) {
    flex-direction: column;
  }
`