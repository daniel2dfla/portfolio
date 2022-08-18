import React from 'react'
import { Container, Grid } from './styles'
import LabeX from '../../img/LabeX.jpg'
import Pokemon from '../../img/pikachu.jpg'
import Forca1 from '../../img/forca1.png'
import Labefood from '../../img/lanche.jpg'
import TelaPetra from '../../img/preto.jpg'

const index = () => {

  return (
    <Container id='projects'>
      <h2>Meus projetos!</h2>
      <Grid>
          <a href='https://github.com/daniel2dfla/Projeto-Labex#login-e-senha-para-teste' target="_blank" rel="noopener noreferrer">
            <img src={LabeX} alt="" class="pic" />
            <p>LabeX</p>
          </a>
          <a href='https://github.com/daniel2dfla/Pokedex' target="_blank" rel="noopener noreferrer">
                <img src={Pokemon} alt="" class="pic" />
                <p>PokedeX</p>
            </a>
            <a href='https://github.com/daniel2dfla/Secret-Word' target="_blank" rel="noopener noreferrer">
                <img src={Forca1} alt="" class="pic" />
                <p>SecretWord</p>
            </a>
            <a href='https://github.com/daniel2dfla/LabeFood' target="_blank" rel="noopener noreferrer">
                <img src={Labefood} alt="" class="pic" />
                <p>LabeFood</p>
            </a>
            <div>
                <img src={TelaPetra} alt="" class="pic" />
                <p>Em breve!</p>
            </div>
      </Grid>
    </Container>
  )
}

export default index