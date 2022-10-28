import React from 'react'
import { Container, Information } from './styles'
import Banner from '../../img/banner.png'

const index = () => {
  return (
    <Container id="initial">
        <Information >
            <h2>Olá , sou <em><strong>Daniel Firmiano</strong></em></h2>
            <h2>Sou desenvolvedor Front-End</h2>
            <a href='https://mega.nz/file/6nQ02arC#g8-XvaUwOdvMUa9sTozvU4JDGpq2urackHrGU4TQbJc' target="_blank" rel="noopener noreferrer">
              <button >Curriculo</button>
            </a>
        </Information>
        <img src={Banner} alt='Plano de fundo'  />
    </Container>
  )
}

export default index
