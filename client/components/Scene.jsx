import React , {useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars, softShadows, MeshWobbleMaterial, OrbitControls} from '@react-three/drei'
import Box from './Box'
import Board from './Board'




const Scene = () => {

  return ( 
    <Canvas>
      <ambientLight intensity={0.5}/>
      <spotLight position={[50, 50, 50]}/>
      <Stars/>
      {/* <pointLight position={[10, 10, 10]}/> */}
      {/* <PerspectiveCamera> */}
      <mesh>
        {/* <planeBufferGeometry args={[3, 5]}/>
        <meshStandardMaterial color='lightblue'/> */}
        <OrbitControls />
        <Box/>
        </mesh>
      <mesh position ={[100, 10, 10]}>
        <Board/>
      </mesh>
      
    </Canvas>
  )
}

export default Scene