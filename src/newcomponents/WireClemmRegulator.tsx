/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 WireClemmRegulator.gltf 
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

const WireClemmRegulator = (props: any) => {
  const { nodes, materials } = useGLTF('/newmodels/WireClemmRegulator.gltf') as any
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.wiring_1.geometry} material={materials['Material.015']} position={[-15.566, 17.486, 3.501]} rotation={[Math.PI / 2, 0, -3.142]} scale={[0.127, 0.664, 0.127]} />
    </group>
  )
}
export default WireClemmRegulator
useGLTF.preload('/newmodels/WireClemmRegulator.gltf')
