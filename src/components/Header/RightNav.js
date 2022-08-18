import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  z-index:2;
  list-style: none;
  display: flex;
  margin-right: 0.4em;
  cursor: pointer;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
      color: #fff;
      a{
        color: #fff;
        text-decoration:none;
      }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    color: #FFF;
    transition:transform 0.3s ease-in-out;  
    background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border-radius: 10px 0 0 10px ;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    height: 90vh;
    text-decoration:none;
    z-index: 3;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      a{
        color: #fff;
        text-decoration:none;
      }
    }
  }
`;
const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
        <li><a href="#initial">Início</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#myskills">Tecnologias</a></li>
        <li><a href="#contacts">Contato</a></li>
    </Ul>
  )
}
export default RightNav