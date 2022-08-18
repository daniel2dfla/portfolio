import styled from 'styled-components';

export const Container = styled.div`
h2{
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction: column;
    text-align: center;
    padding-top:60px;
    color:#000;
    font-size:2em;
}
`

export const Grid = styled.section` 
    display:grid ;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 50px;
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
}


    a{
        text-decoration:none;
       color: #FFF;
        img{
            width: 90%;
            border-radius: 10px;
            height:200px;
        }
    }
    div {
        
        color: #FFF;
        img{
            width: 90%;
            height:200px;
            border-radius: 10px;
        }
    }
`