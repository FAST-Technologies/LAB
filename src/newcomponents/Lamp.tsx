/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Lamp.gltf 
*/

import React, { useRef, useState} from 'react'
import { useGLTF } from '@react-three/drei'

const Lamp = (props: any) => {
  const { nodes, materials } = useGLTF('/newmodels/Lamp.gltf') as any
  return (
    <group {...props} dispose={null}>
      <group position={[-7.725, 17.77, 4.851]} scale={0.225}>
        <mesh geometry={nodes.Cylinder015.geometry} material={materials['Material.011']} />
        <mesh geometry={nodes.Cylinder015_1.geometry} material={materials['Material.012']} />
        <mesh geometry={nodes.Cylinder015_2.geometry} material={materials['Material.014']} />
      </group>
    </group>
  )
}
export default Lamp
useGLTF.preload('/newmodels/Lamp.gltf')
