import React from 'react'
import { Container } from './styles'
import Initial from '../../assets/Initial'
import About from '../../assets/About'
import MySkills from '../../assets/MySkills'
import Projects from '../../assets/Projects'
import Contacts from '../../assets/Contats'
import Navbar from '../../components/Header/Navbar'

const index = () => {
  return (
    <Container>
        <Navbar/>
        <Initial/>
        <About/>
        < br/>
        <hr/>
        <Projects/>
        <hr/>
        < br/>
        <MySkills/>
        < br/>
        <Contacts/>
    </Container>
  )
}

export default index
