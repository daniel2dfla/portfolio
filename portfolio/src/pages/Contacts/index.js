import React from 'react';
import {Container, Cv} from './styles';
import Navbar from '../../components/MenuHamburguer/Navbar'
import { goToCv } from '../../coodinator/Coordinator';
import { useNavigate } from "react-router-dom";

const Contacts = () => {
    const navigate = useNavigate()
  return (
    <>
        <Navbar />
        <Container>
            <h3>Contatos:</h3>
            <p>Endereço: Rua 3, nº:152, Jardim Vila Rica, Volta Redonda-RJ</p>
            <p>Tel: (24) 999042979 - WhatsApp</p>
            <Cv onClick={() => goToCv(navigate)}>Currículum vitae</Cv>
            <a href='https://github.com/daniel2dfla' target="_blank" rel='external'>GitHub</a>
            <a href='https://www.linkedin.com/in/daniel-firmiano-desenvolvedor/' target="_blank" rel='external'>Linkedin</a>
        </Container>
    </>
  )
}

export default Contacts