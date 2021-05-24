import React, { useEffect } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { runCanvas } from '../script'
// import { ReactComponent as BottomImage } from '../svgs/BottomCircle.svg'
// import { ReactComponent as RightOval } from '../svgs/RightOval.svg'
// import { ReactComponent as User } from '../svgs/user.svg'
import { motion } from 'framer-motion'

const Homepage = () => {
  useEffect(() => {
    runCanvas()
  }, [])
  return (
    <div>
      <Container>
        <WorkInProgress>Work in Porgress</WorkInProgress>
        <canvas
          class='webgl'
          style={{
            position: 'absolute',
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
          <motion.div
            style={{
              width: '100%',
              position: 'absolute',
              top: '30%',
              left: '0',
              height: '300px',
              fontSize: '10rem',
              display: 'flex',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: '700',
              transform: 'translateY(-50%)',
              fontFamily: `'Source Sans Pro', sans-serif`,
            }}
            initial={{ y: 0, opacity: [0, 0.7] }}
            animate={{ y: '-700px', opacity: [1, 0.9, 0.8, 0] }}
            transition={{ duration: 1.7, delay: 0.5 }}
          >
            Welcome to my world
          </motion.div>
          <Left>
            <Title>
              <motion.p
                initial={{ y: '100px', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                Shivam
              </motion.p>

              <motion.p
                initial={{ y: '100px', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2, duration: 1.2 }}
              >
                Mishra<PurpleDot>.</PurpleDot>
              </motion.p>
              <motion.p
                initial={{
                  scale: 0,
                  size: 50,
                  y: '100px',
                  opacity: 0,
                }}
                animate={{ scale: [0, 1], size: 100, y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.2 }}
              >
                <BottomLine />
              </motion.p>
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
              <motion.p
                initial={{ y: '100px', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 2.1 }}
              >
                - Introduction
              </motion.p>
              <motion.h3
                initial={{ y: '100px', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 2.5 }}
              >
                Front end developer, Designer, Mumbai.
              </motion.h3>
              <motion.p
                initial={{ y: '100px', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 2.5 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                reiciendis facere nam aliquam hic, nulla quasi natus temporibus
                perferendis exc
              </motion.p>
              <motion.div
                initial={{ y: '100px', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 2.5 }}
              >
                <button href=''>Resume</button>
                <i class='fas fa-arrow-right'></i>
              </motion.div>
            </Info>
          </Right>
        </MainSection>
      </Container>
      <Section2>
        <QuotesSection>
          <h4>Opportunities don't happen. You create them.</h4>
          <div>-- Chris Grosser</div>
        </QuotesSection>
        <Skills></Skills>
      </Section2>
    </div>
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
  max-width: 74%;
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
    position: relative;
    display: inline-block;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 3.2rem;
    }

    &::after {
      content: '';
      position: absolute;
      border-radius: 2px;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 5px;
      background-color: #f20b53;
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      &:after {
        width: 100%;
      }
    }
  }
`

const MainSection = styled.div`
  position: relative;
  padding-top: 5rem;
  margin-top: 5rem;
  width: 100%;
  max-width: 75%;
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

  /* &:after {
  } */
`
const BottomLine = styled.div`
  position: absolute;
  bottom: -1.7rem;
  left: 0.5rem;
  content: '';
  height: 10px;
  width: 20%;
  background-color: #6c63ff;
  border-radius: 2px;
`

const SocialLinks = styled.div`
  margin-left: 0.5rem;
  display: flex;
  font-size: 2rem;
  a {
    text-decoration: none;
    color: #f5f5f5;

    &:hover {
      color: #f20b53;
    }
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
  position: fixed;
  background-color: #f20b53;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 1rem;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`

//Section 2

const Section2 = styled.div`
  height: 100vh;
  background-color: #140444;
`

const QuotesSection = styled.div`
  position: relative;
  margin: 0 auto;
  padding-top: 2rem;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 4rem;
    font-weight: 600;
    font-family: 'Source Sans Pro', sans-serif;
    font-style: italic;
    color: #f20b53;
  }
  div {
    color: #f5f5f5;
    position: absolute;
    right: 6rem;
    bottom: -5px;
  }
`

const Skills = styled.div``
