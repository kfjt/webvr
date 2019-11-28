import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const Canvas = styled.canvas`
position: absolute
`

const use2dText = ({ refCanvas, text, coord }) => {
  useEffect(() => {
    const canvas = refCanvas.current
    const context = canvas.getContext("2d")
    context.fillText(text, coord.x, coord.y, 40)
  })
}

const VRScene = () => {
  const refC1 = useRef()
  const refC2 = useRef()
  use2dText({ refCanvas: refC1, text: 'Hello', coord: { x: 20, y: 20 } })
  use2dText({ refCanvas: refC2, text: 'World', coord: { x: 20, y: 40 } })

  return (
    <div className='vrscene'>
      <Canvas ref={refC1} className='hello' />
      <Canvas ref={refC2} className='world' />
    </div>
  )
}

export default VRScene
