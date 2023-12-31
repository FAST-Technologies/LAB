/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 Walls.glb 
*/

import {useRef, useState} from 'react'
import { useGLTF } from '@react-three/drei'

const Walls = (props: any) => {
  const { nodes, materials } = useGLTF('/models/Walls.glb') as any
    const [hover, setHover]=useState<boolean>(false)
    const [click, setClick]=useState<boolean>(false)
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane002.geometry} material={materials['Brick Wall']} position={[0.19, 80.379, -73.925]} rotation={[Math.PI / 2, 0, 0]} scale={[84.002, 86.971, 86.971]} />
      <mesh geometry={nodes.Plane003.geometry} material={materials['Brick Wall']} position={[78.17, 79.863, 5.752]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[83.909, 86.772, 86.772]} />
      <mesh geometry={nodes.Plane004.geometry} material={materials['Brick Wall']} position={[-81.567, 80.379, 6.529]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={84.414} />
      <mesh geometry={nodes.Plane005.geometry} material={materials['Brick Wall']} position={[0.331, 80.379, 86.206]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[84.417, 85.869, 85.869]} />
    </group>
  )
}

export default Walls

useGLTF.preload('/models/Walls.glb')
