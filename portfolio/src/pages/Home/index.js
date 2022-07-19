import React from 'react';
import { useNavigate } from "react-router-dom";
import {Container} from './styles';
import { goToProfile ,goToProjects } from '../../coodinator/Coordinator';

const Home = () => {
  const navigate = useNavigate()


  return (
    <Container>
      <button onClick={() => goToProfile(navigate)}>Perfil</button>
      <button onClick={() => goToProjects(navigate)}>Projetos</button>
    </Container>
  )
}

export default Home