/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 Table.glb 
*/

import {useRef, useState} from 'react'
import { useGLTF } from '@react-three/drei'

const Table = (props: any) => {
    const ref = useRef() as any
// Hold state for hovered and clicked events
    const [hovered, hover] = useState<boolean>(false)
    const [clicked, click] = useState<boolean>(false)
    const { nodes, materials } = useGLTF('/models/Table.glb') as any
    const setClick = () => {
        click(!clicked)
    }

    return (
      <group {...props} dispose={null}>
          <mesh
              castShadow
              geometry={nodes.table_board.geometry}
              material={nodes.table_board.material}
              position={[-0.295, 17.626, -1.117]}
              // scale={clicked ? [2, 2.649, 2] : [1, 1.649, 1]}
              scale={[1, 1.649, 1]}
              ref={ref}

              onClick={setClick}
              onPointerOver={(event) => (event.stopPropagation(), hover(true))}
              onPointerOut={(event) => hover(false)}
          >
              {/*<meshStandardMaterial color={hovered ? 'red' : nodes.table_board.material}/>*/}
          </mesh>
          <mesh castShadow geometry={nodes.iron_table.geometry} material={nodes.iron_table.material} position={[15.501, 8.057, 9.781]} scale={[0.523, 8.698, 0.523]} />
      </group>
    )
}

export default Table

useGLTF.preload('/models/Table.glb')
