import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

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

const VRScene = () => {
  const refV = useRef()
  const refC1 = useRef()
  const refC2 = useRef()
  const [width, setWidth] = useState()
  const [height, setHeight] = useState()
  useVideo({ refVideo: refV, setWidth, setHeight })
  useCanvasSize({ refCanvas: refC1, size: { width, height } })
  useCanvasSize({ refCanvas: refC2, size: { width, height } })
  useGl({ refCanvas: refC1 })
  use2dText({ refCanvas: refC2, text: 'World', coord: { x: 20, y: 40 } })

  return (
    <div className='vrscene'>
      <Video ref={refV} />
      <Canvas ref={refC1} />
      <Canvas ref={refC2} />
    </div>
  )
}

export default VRScene
