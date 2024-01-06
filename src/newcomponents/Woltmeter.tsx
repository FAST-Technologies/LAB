/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Woltmeter.gltf 
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

const Woltmeter = (props: any) => {
  const { nodes, materials } = useGLTF('/newmodels/Woltmeter.gltf') as any
  return (
    <group {...props} dispose={null}>
      <group position={[-12.899, 18.318, 9.178]}>
        <mesh geometry={nodes.Cube004.geometry} material={materials['Material.021']} />
        <mesh geometry={nodes.Cube004_1.geometry} material={materials['Material.022']} />
        <mesh geometry={nodes.Cube004_2.geometry} material={materials['Material.023']} />
      </group>
    </group>
  )
}
export default Woltmeter
useGLTF.preload('/newmodels/Woltmeter.gltf')
