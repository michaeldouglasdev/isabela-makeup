import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  background-color: white;
  padding: 4px 12px;
  z-index: 9;
  @media(max-width: 640px) {
    flex: 1;
    width: 100%;
  }
`

/*
#ffcfd1
#ffc5d8
#ff9ac5
*/