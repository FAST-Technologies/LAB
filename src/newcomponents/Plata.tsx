/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Plata.gltf 
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

const Plata = (props: any) => {
  const { nodes, materials } = useGLTF('/newmodels/Plata.gltf') as any
  return (
    <group {...props} dispose={null}>
      <group
          position={[0.365, 19.436, -19.715]}
          scale={[0.683, 0.331, 0.008]}>
        <mesh
            geometry={nodes.Cube.geometry}
            material={materials['Material.006']}
        />
        <mesh
            geometry={nodes.Cube_1.geometry}
            material={materials['Material.005']}
        />
      </group>
    </group>
  )
}
export default Plata
useGLTF.preload('/newmodels/Plata.gltf')
