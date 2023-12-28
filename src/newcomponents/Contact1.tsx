/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Contact1.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Contact1 = (props: any) => {
  const { nodes, materials } = useGLTF('/newmodels/Contact1.gltf') as any
  return (
    <group {...props} dispose={null}>
      <group position={[0.045, 19.582, 5.689]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-0.044, -0.018, -0.044]}>
        <mesh geometry={nodes['Изолятор_контакта_#1005_1'].geometry} material={materials['Material.009']} />
        <mesh geometry={nodes['Изолятор_контакта_#1005_2'].geometry} material={materials['Material.007']} />
      </group>
    </group>
  )
}
export default Contact1
useGLTF.preload('/newmodels/Contact1.gltf')