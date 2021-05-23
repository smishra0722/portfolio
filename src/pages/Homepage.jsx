import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { ReactComponent as BottomImage } from '../svgs/BottomCircle.svg'
import { ReactComponent as RightOval } from '../svgs/RightOval.svg'
import { ReactComponent as User } from '../svgs/user.svg'

import { motion } from 'framer-motion'
const Homepage = () => {
  return (
    <Container>
      <Navbar />
      <Line />

      <TitlePlace>
        <Name>Shivam Mishra</Name>
        <Designation>FRONT END DEVELOPER</Designation>
      </TitlePlace>
      <SVGPart>
        <User style={{ height: '100%' }} />
      </SVGPart>
      <BottomCircle whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <BottomImage />
      </BottomCircle>
      <RightOvalSVG whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <RightOval />
      </RightOvalSVG>
    </Container>
  )
}

export default Homepage

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #140444;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
`

const BottomCircle = styled(motion.div)`
  position: absolute;
  left: -4rem;
  bottom: -25rem;
`
const RightOvalSVG = styled(motion.div)`
  position: absolute;
  right: -4rem;
  top: -3rem;
`

const SVGPart = styled.div`
  height: 60vh;
  width: 60%;
  position: absolute;
  top: 60%;
  left: 85vw;
  transform: translate(-50%, -70%);
`

const TitlePlace = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);

  height: 40vh;
  width: 40%;
`

const Name = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 10rem;
  font-weight: 700;
  color: #f20b53;
  line-height: 85%;
`

const Designation = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 4rem;
  font-weight: 700;
  color: #f5f5f5;
  line-height: 85%;
  margin-top: 1rem;
`

const Line = styled.div`
  height: 2px;
  width: 100%;
  background-color: #f5f5f5;
  position: absolute;
  top: 71%;
`
