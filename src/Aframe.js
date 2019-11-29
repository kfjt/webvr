import React from 'react'
import styled from 'styled-components'

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

export { AFrameScene }
