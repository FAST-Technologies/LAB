/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 contaktsCondera.glb 
*/


import {useRef, useState} from 'react'
import { useGLTF } from '@react-three/drei'

const CapacitorContacts = (props: any) => {
  const { nodes, materials } = useGLTF('/models/CapacitorContacts.glb') as any
    const [hover, setHover]=useState<boolean>(false)
    const [click, setClick]=useState<boolean>(false)
  return (
    <group {...props} dispose={null}>
      <group position={[6.71, 18.438, -1.067]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[-0.099, -0.007, -0.099]}>
        <mesh geometry={nodes.Основа_контакта_2004.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Основа_контакта_2004_1.geometry} material={materials['Material.009']} />
      </group>
    </group>
  )
}

export default CapacitorContacts

useGLTF.preload('/models/CapacitorContacts.glb')
