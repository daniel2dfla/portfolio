import styled from 'styled-components';

export const Container = styled.div`
width: 100vw;
height: 100vh;
max-width: 100vw;
background-color: #a9a9a9 ;
box-sizing: border-box;;
margin-top:0 ;




`
export const Cont = styled.div` 
display: flex;
position: relative;
padding:100px 50px 0 50px;
justify-content: space-around;

@media (max-width: 400px) {
    padding: 80px 50px 0 50px;
}


img{
    width:350px ;
    border-radius:5px;
    margin-bottom:30px;
    @media (max-width: 768px) {
    display: none;
}
}
`

export const About = styled.div` 
padding-top:150px ;
font-size: 1.1em;
width: 550px;

@media (max-width: 768px) {
    padding: 0;
}

h2{
    color:#000;
    font-size:1.7em;
    text-align: center;
}
p{
    font-family:Arial, Helvetica, sans-serif;
    text-align: center;
}
`

export const Fundo = styled.div` 
background-color: #696969;
width: 100vw;
height: 100vh;
position:absolute ;
-webkit-clip-path: polygon(0 0, 100% 100%, 100% 0);
clip-path: polygon(0 0, 100% 100%, 100% 0);
`