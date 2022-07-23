import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHome } from '../../coodinator/Coordinator';
import { Cv } from './styles';
import Img from '../../video/Currículum-Daniel-Nascimento.png';

const Curriculum = () => {
  const navigate = useNavigate()
  return (
    <>
      <button onClick={() => goToHome(navigate)}>Inicio</button>
      <Cv>
        <img src={Img} />
      </Cv>
    </>
  )
}

export default Curriculum