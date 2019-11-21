import React, { useEffect, useRef, useState } from 'react'

const Video = ({ videoEl }) => {
  useEffect(() => {
    const video = videoEl.current
    const setVideoStream = async () => {
      video.srcObject = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment', frameRate: { ideal: 5, max: 10 } } })
    }
    setVideoStream()
  }, [videoEl])

  return <video ref={videoEl} />
}

const Sky = ({ dataUrl, imgEl }) => dataUrl ? <img id='sky' alt='sky' src={dataUrl} /> : <span id='sky' />

const VRScene = () => {
  const videoEl = useRef()
  const canvasEl = useRef()
  const [back, setBack] = useState()

  useEffect(() => {
    const video = videoEl.current
    const canvas = canvasEl.current
    video.addEventListener('loadedmetadata', () => {
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      // canvas.style.display = 'none'
      video.style.display = 'none'
    })
    const updateCanvas = () => {
      const ctx = canvas.getContext('2d')
      ctx.drawImage(video, 0, 0)
      setBack(canvas.toDataURL())
      requestAnimationFrame(updateCanvas)
    }
    video.addEventListener('loadeddata', video.play)
    video.addEventListener('loadeddata', updateCanvas)

    return () => cancelAnimationFrame(updateCanvas)
  }, [])

  return (
    <div className='vrscene'>
      <Video videoEl={videoEl} />
      <canvas ref={canvasEl} />
      <a-scene>
        <a-assets>
          <Sky dataUrl={back} />
        </a-assets>
        <a-image src="#sky" />
        <a-entity geometry="primitive: box" position="-1 0.5 -3" rotation="0 45 0" material="color:#4CC3D9"></a-entity>
        <a-entity geometry="primitive: sphere" position="0 1.25 -5" radius="1.25" material="color:#EF2D5E"></a-entity>
        <a-entity geometry="primitive: cylinder" position="1 0.75 -3" radius="0.5" height="1.5" material="color:#FFC65D"></a-entity>
        <a-entity geometry="primitive: plane" position="0 0 -4" rotation="-90 0 0" width="4" height="4" material="color:#7BC8A4"></a-entity>
      </a-scene>
    </div>
  )
}

export default VRScene;
