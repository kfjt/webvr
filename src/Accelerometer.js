import { useEffect } from 'react'

export const useAccelerometer = ({ setAcceleration }) => {
  useEffect(() => {
    const motionHandler = ev => setAcceleration(ev.acceleration)
    window.addEventListener('devicemotion', motionHandler, true)

    return window.removeEventListener('devicemotion', motionHandler)
  })
}
