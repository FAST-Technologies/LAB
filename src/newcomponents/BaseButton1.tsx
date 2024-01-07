/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 BaseButton1.gltf 
*/

import React, { useRef, useState} from 'react'
import { useGLTF } from '@react-three/drei'

const BaseButton1 = (props: any) => {
  const { nodes, materials } = useGLTF('/newmodels/Base1.gltf') as any
  return (
    <group {...props} dispose={null}>
      <mesh
          geometry={nodes.Cube089.geometry}
          material={materials['Material.026']}
          position={[-5.748, 17.467, -19.957]}
          scale={[0.755, 0.178, 0.755]}
      />
    </group>
  )
}
export default BaseButton1

useGLTF.preload('/newmodels/Base1.gltf')
