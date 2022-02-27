import styled from 'styled-components';
import logoNameInitial from '../../assets/logo-name-initials.png';

export const LogoContainer = styled.div`
  height: 92px;
  width: 92px;
  background: url(${logoNameInitial}) no-repeat center;
  background-size: cover;

  @media(max-width: 640px) {
    height: 75px;
    width: 75px;
  }
`;