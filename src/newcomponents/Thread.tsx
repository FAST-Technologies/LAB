/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Thread.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Thread = (props: any) => {
  const { nodes, materials } = useGLTF('/newmodels/Thread.gltf') as any
  return (
    <group {...props} dispose={null}>
      <group />
    </group>
  )
}
export default Thread
useGLTF.preload('/newmodels/Thread.gltf')
