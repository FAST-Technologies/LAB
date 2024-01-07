/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Contact2Button1.gltf 
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

const Contact2Button1 = (props: any) => {
  const { nodes, materials } = useGLTF('/newmodels/Contact2Button1.gltf') as any
  return (
    <group {...props} dispose={null}>
      <group position={[-5.18, 17.774, -19.416]} rotation={[0, 0, -Math.PI]} scale={[-0.069, -0.029, -0.069]}>
        <mesh geometry={nodes['Изолятор_контакта_#1011_1'].geometry} material={materials['Material.009']} />
        <mesh geometry={nodes['Изолятор_контакта_#1011_2'].geometry} material={materials['Material.007']} />
      </group>
    </group>
  )
}
export default Contact2Button1
useGLTF.preload('/newmodels/Contact2Button1.gltf')
