import React, { useEffect, useRef, useState } from 'react'
import 'aframe'

const RealWorld = ({ videoEl }) => {
  const width = useRef(0)
  const height = useRef(0)
  const depth = useRef(0)

  useEffect(() => {
    const video = videoEl.current
    video.addEventListener('loadeddata', () => {
      width.current = video.videoWidth
      height.current = video.videoHeight
      depth.current = video.videoHeight / 2
    })
  })

  if (width.current === 0 || height.current === 0)
    return <div>camera loading ...</div>

  return (
    <a-entity
      geometry={`primitive: plane; width: ${width.current}; height: ${height.current}`}
      material="src: #webcam"
      position={`0 0 -${depth.current}`} />
  )
}

const VRScene = () => {
  const videoEl = useRef()
  const [stream, setStream] = useState()

  useEffect(() => {
    const video = videoEl.current
    video.addEventListener('loadeddata', video.play)
    video.srcObject = stream
    const setVideoSource = async () => {
      setStream(await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment', frameRate: { ideal: 2, max: 10 } } }))
    }
    setVideoSource()
  })

  return (
    <div className='vrscene'>
      <a-scene stats>
        <a-asset>
          <video id='webcam' ref={videoEl} />
        </a-asset>
        <a-entity camera look-controls>
          <RealWorld videoEl={videoEl} />
        </a-entity>
        <a-entity geometry="primitive: box" position="-1 0.5 -3" rotation="0 45 0" material="color: yellow"></a-entity>
        <a-entity geometry="primitive: sphere" position="0 1.25 -5" radius="1.25" material="color: pink"></a-entity>
        <a-entity geometry="primitive: cylinder" position="1 0.75 -3" radius="0.5" height="1.5" material="color: red"></a-entity>
        <a-entity geometry="primitive: plane; height: 4; width: 4" position="0 0 -4" rotation="-90 0 0" material="color: purple"></a-entity>
        <a-sky material="color: black" />
      </a-scene>
    </div>
  )
}

export default VRScene
