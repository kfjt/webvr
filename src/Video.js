import { useEffect } from 'react'
import styled from 'styled-components'

export const Video = styled.video`
  position: absolute
`

export const useVideo = ({ refVideo, setWidth, setHeight }) => {
  useEffect(() => {
    const video = refVideo.current
    const setSrcObject = async () => {
      video.srcObject = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
    }
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      setSrcObject()
    }
    video.addEventListener('loadeddata', video.play)
    video.addEventListener('loadedmetadata', () => {
      setWidth(video.videoWidth)
      setHeight(video.videoHeight)
    })
  })
}
