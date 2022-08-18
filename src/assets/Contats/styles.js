import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
height:100px ;
background-color: #363636;

`

export const Icons = styled.div` 
font-size: 1.5em ;
display: flex;
align-items: center;
justify-content: space-between;
margin: 0 5px;
a{
    text-decoration:none;
}
a:nth-child(1){
    color: #23d366;
}
a:nth-child(2){
    color: #3f729b;
}
a:nth-child(3){
    color: #E1306C;
}
a:nth-child(4){
    color:#4F4F4F
    }
`

export const Contatos = styled.div` 
padding-left: 100px;
`