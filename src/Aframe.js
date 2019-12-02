import React from 'react'
import styled from 'styled-components'

// import BowlingGlb from './asset/bowling.glb'

const rawAScene = props => <a-scene embedded vr-mode-ui='enabled: false' keyboard-shortcuts='enterVR: false' stats >{props.children}</a-scene>

const AScene = styled(rawAScene)`
  a-scene {
    width: ${props => props.width}px
    height: ${props => props.height}px
  }
`

const AFrameScene = ({ width, height, acceleration }) => {
  if (!height) return <div />

  return (
    <AScene width={width} height={height}>
      <a-entity position={acceleration}>
        <a-entity camera look-controls></a-entity>
      </a-entity>
      {/* <a-entity position='-0.5 1 -3' scale='0.01 0.01 0.01' rotation='90 0 0' gltf-model={BowlingGlb}></a-entity> */}
      {/* <a-box position='1 1 -4' color='yellow'></a-box> */}
      <a-entity geometry='primitive: cone; radiusBottom: 0.1; radiusTop: 0.01' material='color: yellow' position='0 0 0'></a-entity>
      <a-entity geometry='primitive: cone; radiusBottom: 0.1; radiusTop: 0.01' material='color: yellow' position='1 0 0'></a-entity>
      <a-entity geometry='primitive: cone; radiusBottom: 0.1; radiusTop: 0.01' material='color: yellow' position='2 0 0'></a-entity>
      <a-entity geometry='primitive: cone; radiusBottom: 0.1; radiusTop: 0.01' material='color: yellow' position='3 0 0'></a-entity>
      <a-entity geometry='primitive: cone; radiusBottom: 0.1; radiusTop: 0.01' material='color: yellow' position='4 0 0'></a-entity>
    </AScene>
  )
}

export { AFrameScene }
