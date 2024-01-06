/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Contact2Diod.gltf 
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

const Contact2Diod = (props: any) => {
  const { nodes, materials } = useGLTF('/newmodels/Contact2Diod.gltf') as any
  return (
    <group {...props} dispose={null}>
      <group position={[-10.266, 17.694, 4.923]} rotation={[0, 0, -Math.PI]} scale={[-0.074, -0.031, -0.074]}>
        <mesh geometry={nodes['Изолятор_контакта_#1001_1'].geometry} material={materials['Material.009']} />
        <mesh geometry={nodes['Изолятор_контакта_#1001_2'].geometry} material={materials['Material.007']} />
      </group>
    </group>
  )
}
export default Contact2Diod
useGLTF.preload('/newmodels/Contact2Diod.gltf')
