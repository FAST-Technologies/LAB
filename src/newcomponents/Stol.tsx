/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Stol.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Stol = (props: any) => {
  const { nodes, materials } = useGLTF('/newmodels/Stol.gltf') as any
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.iron_table.geometry} material={materials['Artisan oak, kronospan, wood.']} position={[15.501, 8.057, 9.781]} scale={[0.523, 8.698, 0.523]} />
    </group>
  )
}

export default Stol

useGLTF.preload('/newmodels/Stol.gltf')
