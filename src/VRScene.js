import React, { useRef, useState } from 'react'
import styled from 'styled-components'

import { Video, useVideo } from './Video'
import { use2dText, useGl, useThree } from './myEffect'

const Div = styled.div`
  width: ${props => props.width}px
  height: ${props => props.height}px
`

const Canvas = styled.canvas`
  position: absolute
  width: ${props => props.width}px
  height: ${props => props.height}px
`

const rawAScene = props => <a-scene embedded vr-mode-ui='enabled: false' keyboard-shortcuts='enterVR: false' inspector='false' debug='false' stats >{props.children}</a-scene>

const AScene = styled(rawAScene)`
  a-scene {
    width: ${props => props.width}px
    height: ${props => props.height}px
  }
`

const AFrameScene = ({ width, height }) => {
  if (!height) return <div />

  return (
    <AScene width={width} height={height}>
      <a-box position='0 1 -4' color='yellow'></a-box>
    </AScene>
  )
}


const VRScene = () => {
  const refV = useRef()
  const refC1 = useRef()
  const refC2 = useRef()
  const refC3 = useRef()
  const [width, setWidth] = useState()
  const [height, setHeight] = useState()

  useVideo({ refVideo: refV, setWidth, setHeight })
  useGl({ refCanvas: refC1 })
  use2dText({ refCanvas: refC2, text: 'Hello World', coord: { x: 20, y: 40 } })
  useThree({ refCanvas: refC3 })

  return (
    <Div className='vrscene' width={width} height={height}>
      <Video ref={refV} />
      <Canvas ref={refC1} width={width} height={height} />
      <Canvas ref={refC2} width={width} height={height} />
      <Canvas ref={refC3} width={width} height={height} />
      <AFrameScene width={width} height={height}></AFrameScene>
    </Div>
  )
}

export default VRScene
