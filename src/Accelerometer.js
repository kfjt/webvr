import React, { useEffect, useState } from 'react'

export const Accelerometer = () => {
  const [acceleration, setAcceleration] = useState({ x: 0, y: 0, z: 0 })

  useEffect(() => {
    const motionHandler = ev => setAcceleration(ev.acceleration)
    window.addEventListener('devicemotion', motionHandler)

    return window.removeEventListener('devicemotion', motionHandler)
  })


  return (
    <div className='accelerometer'>
      <div>{`X-axis ${acceleration.x}`}</div>
      <div>{`Y-axis ${acceleration.y}`}</div>
      <div>{`Z-axis ${acceleration.z}`}</div>
    </div>
  )
}
