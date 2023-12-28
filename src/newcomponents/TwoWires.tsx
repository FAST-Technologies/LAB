/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 TwoWires.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const TwoWires = (props: any) => {
  const { nodes, materials } = useGLTF('/newmodels/TwoWires.gltf') as any
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.wiring_1002.geometry} material={materials['Material.015']} position={[-15.558, 17.483, 6.29]} rotation={[Math.PI / 2, 0, -3.142]} scale={[0.094, 0.608, 0.094]} />
    </group>
  )
}
export default TwoWires
useGLTF.preload('/newmodels/TwoWires.gltf')
