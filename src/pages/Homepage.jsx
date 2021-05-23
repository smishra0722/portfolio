import React, { useEffect } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { runCanvas } from '../script'
import { ReactComponent as BottomImage } from '../svgs/BottomCircle.svg'
import { ReactComponent as RightOval } from '../svgs/RightOval.svg'
import { ReactComponent as User } from '../svgs/user.svg'

import { motion } from 'framer-motion'
const Homepage = () => {
  useEffect(() => {
    runCanvas()
  }, [])
  return (
    <Container>
      <WorkInProgress>Work in Porgress</WorkInProgress>
      <canvas
        class='webgl'
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          outline: 'none',
          zIndex: -1,
        }}
      ></canvas>
      <Header>
        <NavLogo>
          SM<PurpleDot>.</PurpleDot>
        </NavLogo>
        <NavLinks>
          <li>About me</li>
          <li>Work</li>
          <li>Blog</li>
          <li>Contact</li>
        </NavLinks>
      </Header>
      <MainSection>
        <Left>
          <Title>
            Shivam
            <br /> Mishra<PurpleDot>.</PurpleDot>
          </Title>
          <SocialLinks>
            <div>
              <a href=''>
                <i class='fab fa-linkedin'></i>
              </a>
            </div>
            <div>
              <a href=''>
                <i class='fab fa-github'></i>
              </a>
            </div>
            <div>
              <a href=''>
                <i class='fab fa-instagram-square'></i>
              </a>
            </div>
          </SocialLinks>
        </Left>
        <Right>
          <Info>
            <p>- Introduction</p>
            <h3>Front end developer, Designer, Mumbai.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              reiciendis facere nam aliquam hic, nulla quasi natus temporibus
              perferendis exc
            </p>
            <div>
              <button href=''>Resume</button>
              <i class='fas fa-arrow-right'></i>
            </div>
          </Info>
        </Right>
      </MainSection>
    </Container>
  )
}

export default Homepage

const Container = styled.div`
  color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`

const Header = styled.nav`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 20%;
  background: transparent;
`

const NavLogo = styled.div`
  font-size: 5rem;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 700;
  color: #f5f5f5;
`

const NavLinks = styled.ul`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.5rem;
  color: #f5f5f5;
  list-style: none;

  li {
    display: inline-block;

    &:not(:last-child) {
      margin-right: 3.2rem;
    }
  }
`

const MainSection = styled.div`
  padding-top: 5rem;
  margin-top: 5rem;
  width: 100%;
  max-width: 1440px;
  height: 80%;

  display: flex;
  justify-content: space-between;
`

const PurpleDot = styled.span`
  color: #6c63ff;
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #f5f5f5;
  width: 50%;
`
const Title = styled.div`
  /* border-right: 1px solid white; */
  position: relative;
  font-weight: 700;
  font-size: 10rem;
  line-height: 90%;
  font-family: 'Source Sans Pro', sans-serif;

  &:after {
    position: absolute;
    bottom: -1.7rem;
    left: 0.5rem;
    content: '';
    height: 10px;
    width: 20%;
    background-color: #6c63ff;
    border-radius: 2px;
  }
`

const SocialLinks = styled.div`
  margin-left: 0.5rem;
  display: flex;
  font-size: 2rem;
  a {
    text-decoration: none;
    color: #f5f5f5;
  }
  div {
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`

const Right = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
`

const Info = styled.div`
  margin-top: 1rem;

  width: 70%;
  p {
    color: #cecece;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2rem;
  }
  h3 {
    margin-top: 1rem;
    margin-bottom: 2rem;
    line-height: 90%;
    font-size: 2.1rem;
    font-weight: 600;
    font-family: 'Source Sans Pro', sans-serif;
  }
  div {
    font-weight: 700;
    color: #f20b53;
    button {
      all: unset;
      font-size: 1.2rem;
      border-bottom: 1px solid #f20b53;
      text-decoration: none;
      margin-top: 2rem;
      font-family: 'Open Sans', sans-serif;
    }
    i {
      font-size: 0.7rem;
      margin-left: 0.5rem;
    }
  }
`

/// WIP
const WorkInProgress = styled.div`
  position: absolute;
  background-color: #f20b53;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 1rem;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`
