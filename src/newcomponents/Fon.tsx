/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Fon.gltf 
*/

import React, { useRef, useState}  from 'react'
import { useGLTF } from '@react-three/drei'

const Fon = (props: any) => {
  const { nodes, materials } = useGLTF('newmodels/Fon.gltf') as any
  return (
    <group {...props} dispose={null}>
      <mesh
          geometry={nodes.Plane006.geometry}
          material={materials['Material.028']}
          position={[-3.598, 32.28, 254.649]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[57.417, 57.417, 79.623]}
      />
    </group>
  )
}

export default Fon

useGLTF.preload('newmodels/Fon.gltf')
