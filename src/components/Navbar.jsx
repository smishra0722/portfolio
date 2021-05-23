import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Navbarr>
      <NavItem1>Myself</NavItem1>
      <NavItem2>Projects</NavItem2>
      <NavItem3>Contact</NavItem3>
    </Navbarr>
  )
}

export default Navbar

const Navbarr = styled.nav``
const NavItem1 = styled.div`
  color: white;
  font-family: 'Source Sans Pro', sans-serif;
  width: 150px;
  position: absolute;
  left: 12%;
  top: 0;
  transform: translate(-50%, -50%) rotate(-90deg);
  margin-bottom: 1rem;
  background-color: #f20b53;
  padding: 1rem;
  cursor: pointer;
  box-shadow: 0px 5px 8px -2px rgba(0, 0, 0, 0.76);
  -webkit-box-shadow: 0px 5px 8px -2px rgba(0, 0, 0, 0.76);
  -moz-box-shadow: 0px 5px 8px -2px rgba(0, 0, 0, 0.76);
  transition: all 0.2s cubic-bezier(0.47, 0.66, 0.85, 1.45);
  &:hover {
    top: 2rem;
  }
`
const NavItem2 = styled.div`
  color: white;
  font-family: 'Source Sans Pro', sans-serif;
  width: 150px;
  position: absolute;
  left: 15%;
  top: 0;
  transform: translate(-50%, -50%) rotate(-90deg);
  margin-bottom: 1rem;
  background-color: #f20b53;
  padding: 1rem;
  cursor: pointer;
  box-shadow: 0px 5px 8px -2px rgba(0, 0, 0, 0.76);
  -webkit-box-shadow: 0px 5px 8px -2px rgba(0, 0, 0, 0.76);
  -moz-box-shadow: 0px 5px 8px -2px rgba(0, 0, 0, 0.76);
  transition: all 0.2s cubic-bezier(0.47, 0.66, 0.85, 1.45);
  &:hover {
    top: 2rem;
  }
`
const NavItem3 = styled.div`
  color: white;
  font-family: 'Source Sans Pro', sans-serif;
  width: 150px;
  position: absolute;
  left: 18%;
  top: 0;
  transform: translate(-50%, -50%) rotate(-90deg);
  margin-bottom: 1rem;
  background-color: #f20b53;
  padding: 1rem;
  cursor: pointer;
  box-shadow: 0px 5px 8px -2px rgba(0, 0, 0, 0.76);
  -webkit-box-shadow: 0px 5px 8px -2px rgba(0, 0, 0, 0.76);
  -moz-box-shadow: 0px 5px 8px -2px rgba(0, 0, 0, 0.76);
  transition: all 0.2s cubic-bezier(0.47, 0.66, 0.85, 1.45);
  &:hover {
    top: 2rem;
  }
`
