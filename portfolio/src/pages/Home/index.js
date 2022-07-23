import React from 'react';
import Avatar from '../../video/Avatar.png'
import { useNavigate } from "react-router-dom";
import { Container, ContImg, ContCard, Name } from './styles';
import { goToProfile } from '../../coodinator/Coordinator';
import Navbar from '../../components/MenuHamburguer/Navbar'

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <br/>
      <Container>
        <ContCard>
          <Name><strong>DANIEL NASCIMENTO</strong></Name>
        </ContCard>
        <ContImg>
          <img onClick={() => goToProfile(navigate)} src={Avatar} />
        </ContImg>
      </Container>
    </>
  )
}

export default Home