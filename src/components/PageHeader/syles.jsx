import styled from 'styled-components';

export const Container = styled.header`
  margin-bottom: 24px;

  a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.primary.main};
    display: flex;
    align-items: center;
    span{
      font-weight: bold;
    }

    .arrow{
      margin-right: 8px;
      transform: rotate(-90deg);
    }
  }

  h1 {
    font-size: 24px;
  }
`;
