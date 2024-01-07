/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Automatic.gltf 
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

const Automatic = (props: any) => {
  const { nodes, materials } = useGLTF('/newmodels/Automatic.gltf') as any

  return (
    <group {...props} dispose={null}>
      <group
          position={[-15.241, 17.866, -16.858]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.451, 0.188, 0.566]}
      >
        <mesh geometry={nodes.Cube002.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Cube002_1.geometry} material={materials['Material.011']} />
      </group>
    </group>
  )
}

export default Automatic

useGLTF.preload('/newmodels/Automatic.gltf')
