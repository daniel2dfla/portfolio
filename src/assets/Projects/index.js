import React from 'react'
import { Container, Grid } from './styles'
import LabeX from '../../img/LabeX.jpg'
import Pokemon from '../../img/pikachu.jpg'
import Forca1 from '../../img/forca1.png'
import Labefood from '../../img/lanche.jpg'
import TelaPetra from '../../img/preto.jpg'
import Cep from '../../img/cep.PNG'
import Todo from '../../img/Todo.PNG'

const index = () => {

  return (
    <Container id='projects'>
      <h2>Meus projetos!</h2>
      <Grid>
          <a href='https://github.com/daniel2dfla/Projeto-Labex#login-e-senha-para-teste' target="_blank" rel="noopener noreferrer">
            <img src={LabeX} alt="Projeto Labex" class="pic" />
            <p>LabeX</p>
          </a>
          <a href='https://github.com/daniel2dfla/Pokedex' target="_blank" rel="noopener noreferrer">
                <img src={Pokemon} alt="Projeto Pokemon" class="pic" />
                <p>PokedeX</p>
            </a>
            <a href='https://github.com/daniel2dfla/Secret-Word' target="_blank" rel="noopener noreferrer">
                <img src={Forca1} alt="Projeto forca" class="pic" />
                <p>SecretWord</p>
            </a>
            <a href='https://github.com/daniel2dfla/LabeFood' target="_blank" rel="noopener noreferrer">
                <img src={Labefood} alt="Projeto Labefood" class="pic" />
                <p>LabeFood</p>
            </a>
            <a href='https://github.com/daniel2dfla/buscadorCep' target="_blank" rel="noopener noreferrer">
                <img src={Cep} alt="Projeto busca cep" class="pic" />
                <p>Buscador de cep</p>
            </a>
            <a href='https://github.com/daniel2dfla/Lista_de_tarefas' target="_blank" rel="noopener noreferrer">
                <img src={Todo} alt="Projeto lista de tarefas" class="pic" />
                <p>Lista de tarefas</p>
            </a>
            <div>
                <img src={TelaPetra} alt="" class="pic" />
                <p>Em breve!</p>
            </div>
            <div>
                <img src={TelaPetra} alt="" class="pic" />
                <p>Em breve!</p>
            </div>
      </Grid>
    </Container>
  )
}

export default index