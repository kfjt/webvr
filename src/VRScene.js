import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three'

import { Video, useVideo } from './Video'

const Div = styled.div`
  width: ${props => `${props.width}px` || 'auto'}
  height: ${props => `${props.height}px` || 'auto'}
`

const Canvas = styled.canvas`
  position: absolute
  width: ${props => `${props.width}px` || 'auto'}
  height: ${props => `${props.height}px` || 'auto'}
`

const rawAScene = props => <a-scene embedded vr-mode-ui='enabled: false' keyboard-shortcuts='enterVR: false' inspector='false' debug='false' stats >{props.children}</a-scene>

const AScene = styled(rawAScene)`
  a-scene {
    width: ${props => `${props.width}px` || 'auto'}
    height: ${props => `${props.height}px` || 'auto'}
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

const use2dText = ({ refCanvas, text, coord }) => {
  useEffect(() => {
    const canvas = refCanvas.current
    const context = canvas.getContext('2d')
    context.fillText(text, coord.x, coord.y, 40)
  })
}

const glInit = gl => {
  gl.clearColor(0.0, 0.0, 0.0, 0.5)
  gl.clear(gl.COLOR_BUFFER_BIT)
}

// god is now here : https://wgld.org/
const useGl = ({ refCanvas }) => {
  useEffect(() => {
    const canvas = refCanvas.current
    const gl = canvas.getContext('webgl2')
    if (gl) {
      glInit(gl)
    }
  })
}

const useThree = ({ refCanvas }) => {
  const scene = new Scene()
  const camera = new PerspectiveCamera(90)
  const geometry = new BoxGeometry(1, 1, 1)
  const material = new MeshBasicMaterial({ color: 0x00ff00 })
  const cube = new Mesh(geometry, material)
  scene.add(cube)
  camera.position.z = 5

  useEffect(() => {
    const canvas = refCanvas.current
    const renderer = new WebGLRenderer({ canvas, alpha: true })
    renderer.setSize(canvas.width, canvas.height)

    const animate = () => {
      requestAnimationFrame(animate)

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera)
    }
    animate()
  })
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
  use2dText({ refCanvas: refC2, text: 'World', coord: { x: 20, y: 40 } })
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
