import React from 'react'
import { Container, Icons, Contatos } from './styles'
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa"

const index = () => {
  return (
    <Container id='contacts'>
      <h3>Contato:</h3>
      <Contatos>
        <p>daniel_2dfla@hotmail.com</p>
      <Icons>
        <a href='https://wa.me/24999042979' target="_blank" rel="noopener noreferrer" >
          <FaWhatsapp/>
        </a>
        <a href='https://www.linkedin.com/in/daniel-firmiano-desenvolvedor/' target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn/>
        </a>
        <a href='https://www.instagram.com/daniel.naascimento/' target="_blank" rel="noopener noreferrer">
          <FaInstagram/>
        </a>
        <a href='https://github.com/daniel2dfla' target="_blank" rel="noopener noreferrer">
          <FaGithub/>
        </a>
      </Icons>
      </Contatos>
    </Container>
  )
}

export default index