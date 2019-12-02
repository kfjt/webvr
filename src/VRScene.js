import React, { useRef, useState } from 'react'
import styled from 'styled-components'

import { Video, useVideo } from './Video'
// import { use2dText, useGl, useThree } from './myEffect'
// import { AFrameScene } from './Aframe'
import { Accelerometer } from './Accelerometer'

const Div = styled.div`
  width: ${props => props.width}px
  height: ${props => props.height}px
`

// const Canvas = styled.canvas`
//   position: absolute
//   width: ${props => props.width}px
//   height: ${props => props.height}px
// `

const VRScene = () => {
  const refV = useRef()
  // const refC1 = useRef()
  // const refC2 = useRef()
  // const refC3 = useRef()
  const [width, setWidth] = useState()
  const [height, setHeight] = useState()

  useVideo({ refVideo: refV, setWidth, setHeight })
  // useGl({ refCanvas: refC1 })
  // use2dText({ refCanvas: refC2, text: 'Hello World', coord: { x: 20, y: 40 } })
  // useThree({ refCanvas: refC3 })

  return (
    <Div className='vrscene' width={width} height={height}>
      <Accelerometer />
      <Video ref={refV} />
      {/* <Canvas ref={refC1} width={width} height={height} /> */}
      {/* <Canvas ref={refC2} width={width} height={height} /> */}
      {/* <Canvas ref={refC3} width={width} height={height} /> */}
      {/* <AFrameScene width={width} height={height}></AFrameScene> */}
    </Div>
  )
}

export default VRScene
