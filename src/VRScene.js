import React, { useEffect, useRef, useState } from 'react'
import 'aframe'

const RealWorld = ({ videoEl }) => {
  const aplaneRef = useRef()
  const [pause, setPause] = useState(true)
  const showVideo = () => { setPause(false) }

  useEffect(() => {
    const video = videoEl.current
    const aplane = aplaneRef.current
    video.addEventListener('loadeddata', () => {
      if (!pause) return
      aplane.setAttribute('text', { value: '' })
      aplane.setAttribute('geometry', { primitive: 'plane' })
      aplane.setAttribute('geometry', { width: video.videoWidth, height: video.videoHeight })
      aplane.setAttribute('position', { x: 0, y: 0, z: -1 * (video.videoHeight / 2) })
      aplane.setAttribute('material', 'src', '#webcam')
      showVideo()
    })
    if (pause) {
      aplane.setAttribute('text', { value: 'camera loading ...' })
      aplane.setAttribute('geometry', { width: 800, height: 600 })
      aplane.setAttribute('position', { x: 0, y: 0, z: -400 })
    }
  })

  return <a-entity ref={aplaneRef} />
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
        <a-entity camera look-controls wasd-controls position="0 1.6 4">
          <RealWorld videoEl={videoEl} />
        </a-entity>
        <a-entity geometry="primitive: box" position="-1 0.5 -3" rotation="0 45 0" material="color: yellow"></a-entity>
        <a-entity geometry="primitive: sphere" position="0 1.25 -5" radius="1.25" material="color: pink"></a-entity>
        <a-entity geometry="primitive: cylinder" position="1 0.75 -3" radius="0.5" height="1.5" material="color: red"></a-entity>
        <a-entity geometry="primitive: plane; height: 2; width: 2" position="0 0 -4" rotation="-90 0 0" material="color: purple"></a-entity>
        <a-sky material="color: black" />
      </a-scene>
    </div>
  )
}

export default VRScene
