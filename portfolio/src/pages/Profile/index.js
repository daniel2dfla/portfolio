import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHome } from '../../coodinator/Coordinator'
import { Container } from './styles'

const Profile = () => {
    const navigate = useNavigate()
  return (
    <Container>
        <button onClick={() => goToHome(navigate)}>Home</button>
    </Container>
  )
}

export default Profile