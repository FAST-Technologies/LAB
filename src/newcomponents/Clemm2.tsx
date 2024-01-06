/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 clemm2.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Clemm2(props: any) {
  const { nodes, materials } = useGLTF('/newmodels/clemm2.gltf') as any
  return (
    <group {...props} dispose={null}>
      <group position={[-15.688, 17.962, 2.767]} rotation={[0, 0, -Math.PI]} scale={[-0.069, -0.029, -0.069]}>
        <mesh geometry={nodes['Изолятор_контакта_#1009_1'].geometry} material={materials['Material.009']} />
        <mesh geometry={nodes['Изолятор_контакта_#1009_2'].geometry} material={materials['Material.007']} />
      </group>
    </group>
  )
}

useGLTF.preload('/newmodels/clemm2.gltf')