import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
const ContactSection = () => {
  return (
    <Contact>
      <Left>
        <Title>
          <motion.p
            initial={{ y: '100px', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Contact
          </motion.p>

          <motion.p
            initial={{ y: '100px', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1.2 }}
          >
            Me<PurpleDot>.</PurpleDot>
          </motion.p>
          <motion.p
            initial={{
              scale: 0,
              size: 50,
              y: '100px',
              opacity: 0,
            }}
            animate={{ scale: [0, 1], size: 100, y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <BottomLine />
          </motion.p>
        </Title>

        <SocialLinks>
          <div>
            <a href='https://www.linkedin.com/in/smishra0722' target='_blank'>
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
            - Developer, Designer, Weeb
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
    </Contact>
  )
}

export default ContactSection

const Contact = styled.div`
  position: relative;
  padding-top: 5rem;
  margin-top: 5rem;
  width: 100%;
  max-width: 75%;
  height: 80%;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #f5f5f5;
  width: 40%;
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
  /* background-color: red; */
  display: flex;
  justify-content: center;
  width: 40%;
`

const Info = styled.div`
  margin-top: 1rem;

  width: 100%;
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
const PurpleDot = styled.span`
  color: #6c63ff;
`
