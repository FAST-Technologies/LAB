/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 Table.glb 
*/

import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Table = (props: any) => {
  const { nodes, materials } = useGLTF('/models/Table.glb') as any
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.table_board.geometry} material={nodes.table_board.material} position={[-0.295, 17.626, -1.117]} scale={[1, 1.649, 1]} />
      <mesh geometry={nodes.iron_table.geometry} material={nodes.iron_table.material} position={[15.501, 8.057, 9.781]} scale={[0.523, 8.698, 0.523]} />
    </group>
  )
}

export default Table

useGLTF.preload('/models/Table.glb')
