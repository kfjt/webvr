import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three'

const Video = styled.video`
  position: absolute
`

const Canvas = styled.canvas`
  position: absolute
`

const useVideo = ({ refVideo, setWidth, setHeight }) => {
  useEffect(() => {
    const video = refVideo.current
    const setSrcObject = async () => {
      video.srcObject = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
    }
    setSrcObject()
    video.addEventListener('loadeddata', video.play)
    video.addEventListener('loadedmetadata', () => {
      setWidth(video.videoWidth)
      setHeight(video.videoHeight)
    })
  })
}

const useCanvasSize = ({ refCanvas, size }) => {
  useEffect(() => {
    const canvas = refCanvas.current
    canvas.width = size.width
    canvas.height = size.height
  })
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
    glInit(gl)
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
    // const gl = canvas.getContext('webgl2')
    // glInit(gl)
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

  useCanvasSize({ refCanvas: refC1, size: { width, height } })
  useGl({ refCanvas: refC1 })

  useCanvasSize({ refCanvas: refC2, size: { width, height } })
  use2dText({ refCanvas: refC2, text: 'World', coord: { x: 20, y: 40 } })

  useCanvasSize({ refCanvas: refC3, size: { width, height } })
  useThree({ refCanvas: refC3 })

  return (
    <div className='vrscene'>
      <Video ref={refV} />
      <Canvas ref={refC1} />
      <Canvas ref={refC2} />
      <Canvas ref={refC3} />
    </div>
  )
}

export default VRScene
