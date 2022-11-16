import React from 'react'
import { Container, Fundo, Cont, About } from './styles'
import Avatar from '../../img/Avatar.png'

const index = () => {
  return (
    <Container id='about'>
      <Fundo/>
      <Cont>
        <img src={Avatar} alt='Meu avatar'  />
        <About>
          <h2>Sobre mim!</h2>
          <p>Meu nome é Daniel Nascimento Firmiano, programador Front-End júnior. Gosto de dizer que sou o protagonista da minha história, corro sempre atrás dos meus objetivos, sempre tenho a ética como um pilar. Aprendo um pouco a cada dia, tendo em mente que amanhã terei mais conhecimento do que hoje, dividir para conquistar não é mesmo? Sou um desenvolvedor Full-Stack estudante da Labenu, amo tecnologia e gosto de trabalhar em equipe. </p>
        </About>
        
      </Cont>
    </Container>
  )
}

export default index