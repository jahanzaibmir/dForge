import React from 'react'

export default function DocCard(){
  return (
    <group rotation={[0.1, -0.4, 0]}>
      <mesh position={[0,0,0]}>
        <boxGeometry args={[3.2, 2.2, 0.12]} />
        <meshStandardMaterial color={'#FFFFFF'} roughness={0.6} />
      </mesh>
      <mesh position={[1.0, -0.7, 0.07]} rotation={[0,0,0]}>
        <boxGeometry args={[1.4, 0.6, 0.06]} />
        <meshStandardMaterial color={'#E9DCCF'} roughness={0.7} />
      </mesh>
    </group>
  )
}
