import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import DocCard from './DocCard'

export default function Scene(){
  return (
    <div className="scene">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5,5,5]} intensity={0.6} />
        <Float floatIntensity={0.8} rotationIntensity={0.2}>
          <DocCard />
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
