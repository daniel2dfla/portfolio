import React from 'react';
import styled from 'styled-components';
import { goToProjects, goToProfile, goToHome, goToContacts } from '../../coodinator/Coordinator'
import { useNavigate } from "react-router-dom";

const Ul = styled.ul`
  z-index:1;
  list-style: none;
  display: flex;
  margin-right: 0.4em;
  cursor: pointer;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
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

    height: 100vh;
    width: 300px;
    z-index: 1;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  const navigate = useNavigate()
  return (
    <Ul open={open}>
      <li onClick={() => goToHome(navigate)}>Inicio</li>
      <li onClick={() => goToProfile(navigate)}>Perfil</li>
      <li onClick={() => goToProjects(navigate)}>Projetos</li>
      <li onClick={() => goToContacts(navigate)}>Contatos</li>
    </Ul>
  )
}

export default RightNav