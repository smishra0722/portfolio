import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
const Loading = () => {
  return (
    <LoadingDiv>
      LOADING
      <motion.div
        initial={{ width: '10%' }}
        animate={{ width: '100%' }}
        transition={{ repeat: Infinity, duration: 1 }}
        style={{
          height: '10px',
          borderRadius: '4px',
          backgroundColor: '#f20b53',
        }}
      ></motion.div>
    </LoadingDiv>
  )
}

export default Loading

const LoadingDiv = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 5rem;
  font-weight: 600;
  position: relative;
`
