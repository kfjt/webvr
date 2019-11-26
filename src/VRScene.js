import React from 'react'

const VRScene = () => {
  const gltfUrl = 'https://modelviewer.dev/examples/assets/Astronaut.'
  return (
    <div className='vrscene'>
      <model-viewer 
        src={`${gltfUrl}glb`} 
        ar 
        camera-controls 
        alt="A 3D model of an astronaut" 
        background-color="#222" 
        ios-src={`${gltfUrl}usdz`} 
        magic-leap 
        unstable-webxr></model-viewer>
    </div>
  )
}

export default VRScene
