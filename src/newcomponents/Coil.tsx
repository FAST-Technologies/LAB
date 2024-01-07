/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Coil.gltf 
*/

import React, { useRef, useState} from 'react'
import { useGLTF } from '@react-three/drei'

const Coil = (props: any) => {
  const { nodes, materials } = useGLTF('/newmodels/Coil.gltf') as any
  return (
    <group {...props} dispose={null}>
      <mesh
          geometry={nodes.Катушка.geometry}
          material={materials['Material.010']}
          position={[0.423, 19.535, -18.652]}
          scale={[0.044, 0.038, 0.038]}
      />
    </group>
  )
}
export default Coil
useGLTF.preload('/newmodels/Coil.gltf')
