import styled from 'styled-components';

export const Container = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction: column;
    font-size: 2em;
    padding: 2em;
    color: #FFF;
    box-sizing: border-box;
    @media(max-width:700px){
      font-size: 1.6em;
  }
    @media(max-width: 415px) {
        font-size: 1.5em;
      }
`;

export const Cv = styled.a`
cursor: pointer;
`