import React from 'react'
import { Container } from './styles'
import Navbar from '../../components/MenuHamburguer/Navbar'

const Profile = () => {
  return (
    <>
      <Navbar />
      <br/>
      <Container>
        <h2>Perfil</h2>
        <p>Sou um entusiasta por inovação e
        tecnologia, busco uma oportunidade em
        uma empresa para poder compartilhar
        ideias, conquistas e trabalhar em um
        ambiente saudável, onde eu possa me
        desenvolver pessoalmente,
        profissionalmente e ajudar com o
        crescimento da empresa.
        </p>
      </Container>
    </>
  )
}

export default Profile