import React from 'react'
import logo from './logo.svg'

const VRScene = () => {
  return (
    <a-scene>
      <a-entity geometry="primitive: box" position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-entity>
      <a-entity geometry="primitive: sphere" position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-entity>
      <a-entity geometry="primitive: cylinder" position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-entity>
      <a-entity geometry="primitive: plane" position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-entity>
      <a-assets>
        <img id="sky" alt='sky' src={logo} />
      </a-assets>
      <a-sky src="#sky"></a-sky>
    </a-scene>
  )
}

export default VRScene;
