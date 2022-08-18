import styled from 'styled-components';

export const Container = styled.section`
    max-width: 100vw;
    height: auto;

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
export const Grid = styled.div`
    display: flex;
    justify-content : center;
    align-items : center;
    flex-wrap: wrap;
    gap: 1.5rem;
`
export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    min-width: 200px;
    font-size: 1.5em;
    border: 1px solid #333;
    width: 40%;
    border-radius: 5px;
    background-color: #363636;
    color: ${(props) => props.color};
`
export const Info = styled.div` 

`