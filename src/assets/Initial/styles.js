import styled from 'styled-components';

export const Container = styled.div`
width: 100vw;
height: 100vh;
box-sizing: border-box;
margin-bottom:0 ;
img {

width: 100vw;
height: 100vh;
}
`
export const Information = styled.div`
position:absolute;
font-size: 1.5em;
top: 9em;
z-index:0 ;
left: 7em;
@media (max-width: 768px) {
    top: 7em;
    left: 3em;
}
@media (max-width: 350px){
    font-size: 1em;
}


h2{
    color: #FFF;
    em{
        color:#FF8C00;;
    }
}


button{
    background-color: #FF8C00;
    margin-left: 30px;
    padding: 5px;
    width: 10em;
    height: 3em;
    color: #FFF;
    cursor: pointer;
    border: none ;
    border-radius: 10px;
    font-family: 'Libre Bodoni', serif;
    :hover{
        background-color:#FF4500;
    }
}
`