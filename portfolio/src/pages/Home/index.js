import React from 'react';
import Avatar from '../../video/Avatar.png'
import { useNavigate } from "react-router-dom";
import {Container, ContImg, ContCard, Name, Button} from './styles';
import { goToProfile ,goToProjects } from '../../coodinator/Coordinator';

const Home = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <ContImg>
        <img onClick={() => goToProfile(navigate)} src={Avatar} />
      </ContImg>
      <ContCard>
        <Name><strong>DANIEL NASCIMENTO</strong></Name>
        <Button>
          <button onClick={() => goToProjects(navigate)}>Projetos</button>
        </Button>
      </ContCard>
    </Container>
  )
}

export default Home