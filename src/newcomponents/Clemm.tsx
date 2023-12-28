/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Clemm.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Clemm = (props: any) => {
  const { nodes, materials } = useGLTF('/newmodels/Clemm.gltf') as any
  return (
    <group {...props} dispose={null}>
      <group position={[-15.52, 17.548, 2.756]} rotation={[Math.PI / 2, 0, 0]} scale={[0.398, 0.21, 0.219]}>
        <mesh geometry={nodes.Cube009.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Cube009_1.geometry} material={materials['Material.007']} />
      </group>
    </group>
  )
}
export default Clemm
useGLTF.preload('/newmodels/Clemm.gltf')