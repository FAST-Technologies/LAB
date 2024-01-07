/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Pendulum.gltf 
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

const Pendulum = (props: any) => {
  const { nodes, materials } = useGLTF('/newmodels/Pendulum.gltf') as any
  return (
    <group receiveShadow {...props} dispose={null}>
      <group
          receiveShadow
          position={[11.155, 27.201, -17.955]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.187}
      >
        <mesh
            receiveShadow
            geometry={nodes.Cylinder002.geometry}
            material={materials['Material.011']}
        />
        <mesh
            receiveShadow
            geometry={nodes.Cylinder002_1.geometry}
            material={materials.M_MetalRuler_SF}
        />
      </group>
    </group>
  )
}
export default Pendulum
useGLTF.preload('/newmodels/Pendulum.gltf')
