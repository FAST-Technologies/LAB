/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Weight.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Weight = (props: any) => {
  const { nodes, materials } = useGLTF('/newmodels/Weight.gltf') as any
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cylinder009.geometry} material={materials['Material.012']} position={[11.153, 19.51, 6.69]} rotation={[0, 0, -Math.PI / 2]} scale={[0.284, 0.639, 0.284]} />
    </group>
  )
}
export default Weight
useGLTF.preload('/newmodels/Weight.gltf')