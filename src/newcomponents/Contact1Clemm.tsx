/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Contact1Clemm.gltf 
*/

import React, {  useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

const Contact1Clemm = (props: any) => {
  const { nodes, materials } = useGLTF('/newmodels/Contact1Clemm.gltf') as any
  return (
    <group {...props} dispose={null}>
      <group position={[-15.36, 17.962, -21.267]} rotation={[0, 0, -Math.PI]} scale={[-0.069, -0.029, -0.069]}>
        <mesh geometry={nodes['Изолятор_контакта_#1006_1'].geometry} material={materials['Material.009']} />
        <mesh geometry={nodes['Изолятор_контакта_#1006_2'].geometry} material={materials['Material.007']} />
      </group>
    </group>
  )
}
export default Contact1Clemm
useGLTF.preload('/newmodels/Contact1Clemm.gltf')
