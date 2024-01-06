/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 CapContact1.gltf 
*/

import React, { useRef, useState} from 'react'
import { useGLTF } from '@react-three/drei'

const CapContact1 = (props: any) => {
  const { nodes, materials } = useGLTF('/newmodels/CapContact1.gltf') as any
  return (
    <group {...props} dispose={null}>
      <group position={[-11.848, 17.774, 5.47]} rotation={[0, 0, -Math.PI]} scale={[-0.069, -0.029, -0.069]}>
        <mesh geometry={nodes['Изолятор_контакта_#1008_1'].geometry} material={materials['Material.009']} />
        <mesh geometry={nodes['Изолятор_контакта_#1008_2'].geometry} material={materials['Material.007']} />
      </group>
    </group>
  )
}
export default CapContact1
useGLTF.preload('/newmodels/CapContact1.gltf')
