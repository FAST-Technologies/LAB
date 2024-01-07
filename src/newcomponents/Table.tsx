/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Table.gltf 
*/

import React, {useEffect, useRef, useState} from 'react'
import { useGLTF } from '@react-three/drei'

const Table = (props: any) => {
    const { nodes, materials } = useGLTF('/newmodels/Table.gltf') as any
    const ref = useRef() as any
    const [hovered, hover] = useState<boolean>(false)
    const [clicked, click] = useState<boolean>(false)
    useEffect(()=>{
        console.log(ref.current)
    })
    const setClick = () => {
        click(!clicked)
    }
    return (
    <group {...props} dispose={null}>
      <mesh
          castShadow
          geometry={nodes.iron_table.geometry}
          material={materials['KRONOSPAN 5527 Stone Oak']}
          position={[15.501, 8.057, 9.781]}
          scale={[0.523, 8.698, 0.523]}
          ref={ref}
          onClick={setClick}
          onPointerOver={(event) => (event.stopPropagation(), hover(true))}
          onPointerOut={(event) => hover(false)}
      >
          {/*<meshStandardMaterial color={hovered ? 'red' : nodes.table_board.material}/>*/}
      </mesh>
    </group>
    )
}
export default Table
useGLTF.preload('/newmodels/Table.gltf')
