import React, { useEffect, useState, lazy, Suspense } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { runCanvas } from '../script'
import { Switch, Route, Link } from 'react-router-dom'
// import { ReactComponent as BottomImage } from '../svgs/BottomCircle.svg'
// import { ReactComponent as RightOval } from '../svgs/RightOval.svg'
// import { ReactComponent as User } from '../svgs/user.svg'
import { motion } from 'framer-motion'

//
// import MainSection from '../components/MainSection'
import Loading from '../components/Loading'
const MainSection = lazy(() => import('../components/MainSection'))
const TestSection = lazy(() => import('../components/AboutSection'))
const WorkSection = lazy(() => import('../components/WorkSection'))
const ContactSection = lazy(() => import('../components/ContactSection'))

const Homepage = () => {
  const [pageLoaded, setPageLoaded] = useState(false)
  useEffect(() => {
    setPageLoaded(true)
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
          <NavLogo to='/'>
            SM<PurpleDot>.</PurpleDot>
          </NavLogo>
          <NavLinks>
            <NavLink to='/about'>About me</NavLink>
            <NavLink to='/work'>Work</NavLink>
            <NavLink>Blog</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
          </NavLinks>
        </Header>
        {pageLoaded && (
          <Suspense
            fallback={
              <LoadingDiv>
                LOADING
                <motion.div
                  initial={{ width: '10%' }}
                  animate={{ width: '100%' }}
                  transition={{ repeat: Infinity }}
                  style={{
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: '#f20b53',
                  }}
                ></motion.div>
              </LoadingDiv>
            }
          >
            <Switch>
              <Route exact path='/' component={MainSection} />
              <Route exact path='/about' component={TestSection} />
              <Route exact path='/work' component={WorkSection} />
              <Route exact path='/contact' component={ContactSection} />
            </Switch>
          </Suspense>
        )}
      </Container>
      {/* <Section2>
        <QuotesSection>
          <h4>Opportunities don't happen. You create them.</h4>
          <div>-- Chris Grosser</div>
        </QuotesSection>
        <Skills></Skills>
      </Section2> */}
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

const NavLogo = styled(Link)`
  text-decoration: none;
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
`
const NavLink = styled(Link)`
  color: #f5f5f5;
  text-decoration: none;
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 3.2rem;
  }

  &::after {
    content: '';
    position: absolute;
    border-radius: 1px;
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
`
const PurpleDot = styled.span`
  color: #6c63ff;
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

//loading
const LoadingDiv = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 5rem;
  font-weight: 600;
  position: relative;
`

const Skills = styled.div``
