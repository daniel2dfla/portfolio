import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  position: static;
  box-sizing: border-box;
    @media(max-width: 768px) {
        //display: block;
        //width: 100px;
      }
`;
export const ContImg = styled.div`
  img{
      width: 50em;
    }
    left: 3em;
    box-sizing: border-box;
    margin-bottom: 0;
    margin-top: 7%;
    cursor: pointer;
    /* @media(max-width: 700px) {
      display: block;
      margin-top: 30em;
      } */
    @media(max-width: 415px) {
    //position: absolute;
    display: block;
    margin-top: 3em;
    img{
      width: 20em;
    }
  
  }
 
`;

export const ContCard = styled.div`
position: absolute;
display: flex;
box-sizing: border-box;
justify-content: space-around;
align-items : center;
flex-direction: column; 
margin-top: 8em;
margin-left: 15em;
font-size: 3em;
/* @media(max-width:700px){
  margin-top: 4em;
  position: fixed;
  display: block;
  margin-left: 1em;
} */
@media(max-width: 415px) {
    //position: absolute;
    display: block;
    margin-left: 1em;
    margin-top: 13em;
    font-size: 1.7em;
  }
`;

export const Name = styled.div`
font-size: 1.5em;
box-sizing: border-box;
background-color: transparent;
color: #FFF
`;


