import React, { useEffect, useRef, useState } from 'react'
import 'aframe'

const VRScene = () => {
  const videoEl = useRef()
  const [stream, setStream] = useState()
  const videoSource = async () => {
    setStream(await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment', frameRate: { ideal: 2, max: 10 } } }))
  }

  useEffect(() => {
    videoSource()
    const video = videoEl.current
    video.addEventListener('loadeddata', video.play)
    video.srcObject = stream
  })

  return (
    <div className='vrscene'>
      <a-scene stats>
        <a-asset>
          <video id='webcam' ref={videoEl} />
        </a-asset>
        <a-entity geometry="primitive: plane; height: 100; width: 100" position="0 0 -30" material="src: #webcam"></a-entity>
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
