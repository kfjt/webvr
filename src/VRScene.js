import React, { useEffect, useRef, useState } from 'react'

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
      <a-scene>
        <a-assets>
          <video id='webcam' crossOrigin='anonymous' ref={videoEl} />
        </a-assets>
        <a-entity geometry="primitive: box" position="-1 0.5 -3" rotation="0 45 0" material="src: #webcam"></a-entity>
        <a-entity geometry="primitive: sphere" position="0 1.25 -5" radius="1.25" material="src: #webcam"></a-entity>
        <a-entity geometry="primitive: cylinder" position="1 0.75 -3" radius="0.5" height="1.5" material="src: #webcam"></a-entity>
        <a-entity geometry="primitive: plane" position="0 0 -4" rotation="-90 0 0" width="4" height="4" material="src: #webcam"></a-entity>
      </a-scene>
    </div>
  )
}

export default VRScene;
