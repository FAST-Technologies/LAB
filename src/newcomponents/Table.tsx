/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Table.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Table = (props: any) => {
  const { nodes, materials } = useGLTF('/newmodels/Table.gltf') as any
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.iron_table.geometry} material={materials['KRONOSPAN 5527 Stone Oak']} position={[15.501, 8.057, 9.781]} scale={[0.523, 8.698, 0.523]} />
    </group>
  )
}
export default Table
useGLTF.preload('/newmodels/Table.gltf')