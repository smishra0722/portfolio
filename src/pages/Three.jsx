import React, { useEffect } from 'react'
import { runCanvas } from '../script'
const Three = () => {
  useEffect(() => {
    runCanvas()
  }, [])
  return (
    <div>
      hii
      <canvas
        class='webgl'
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          outline: 'none',
        }}
      ></canvas>
    </div>
  )
}

export default Three
