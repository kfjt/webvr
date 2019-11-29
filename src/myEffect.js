import { useEffect } from 'react'
import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three'

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
    if (gl) {
      glInit(gl)
    }
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

export { use2dText, useGl, useThree }
