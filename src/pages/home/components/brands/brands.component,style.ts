import styled from 'styled-components';

export const BrandsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 32px;
  gap: 32px;
  background: ${({ theme }) => theme.colors.secondary};
  background: #141414;

  @media(max-width: 640px) {
    flex-direction: column;
    gap: 0px;
  }
`;

interface BrandItemProps {
  src?: string;
  invert?: boolean;
}

export const BrandItem = styled.div<BrandItemProps>`
  height: 250px;
  width: 250px;
  mask: ${({src}) => `url(${src}) center/contain no-repeat`};
  background: white;
  //transition: 0.3s;
  overflow: hidden;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
  //background: ${({ src }) => `url(${src}) no-repeat center`};
  //background-size: contain;
  //filter: ${({ invert }) => invert ? `invert(1)` : `grayscale(1)`};

  @media(max-width: 640px) {
    height: 125px;
    width: 100%;
  }
`;