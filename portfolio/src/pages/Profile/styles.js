import styled from 'styled-components';

export const Container = styled.div`
display : flex;
justify-content : center;
align-items : center;
flex-direction: column;
margin-top: 1em;
font-size: 3em;
padding: 2em;
background-color: transparent;
color: #FFF;
@media(max-width: 768px) {
    position: absolute;
    display: flex;
    // margin-left: 1em;
    font-size: 1.5em;
    text-align : center;
  }
`;