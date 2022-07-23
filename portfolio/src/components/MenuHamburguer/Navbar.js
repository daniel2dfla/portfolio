import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';


const Nav = styled.nav`
  position: absolute;
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #FFF;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  color: #FFF;

  .logo {
    padding: 15px 0;
    font-size: 2em;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Portfólio
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar