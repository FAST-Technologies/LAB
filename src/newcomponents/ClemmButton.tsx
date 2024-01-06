/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 clemmButton.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const clemmButton = (props: any) => {
  const { nodes, materials } = useGLTF('/newmodels/clemmButton.gltf') as any
  return (
    <group {...props} dispose={null}>
      <group position={[-11.848, 17.774, 5.47]} rotation={[0, 0, -Math.PI]} scale={[-0.069, -0.029, -0.069]}>
        <mesh geometry={nodes['Изолятор_контакта_#1008_1'].geometry} material={materials['Material.009']} />
        <mesh geometry={nodes['Изолятор_контакта_#1008_2'].geometry} material={materials['Material.007']} />
      </group>
    </group>
  )
}

export default clemmButton
useGLTF.preload('/newmodels/clemmButton.gltf')
