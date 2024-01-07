/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 roundBullet.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const RoundBullet = (props: any) => {
  const { nodes, materials } = useGLTF('/newmodels/RoundBullet.gltf') as any
  return (
    <group {...props} dispose={null}>
      <mesh
          geometry={nodes.Cylinder006.geometry}
          material={materials['Iron with Splashed Paint']}
          position={[-1.192, 17.491, -18.667]}
          scale={0.232}
      />
    </group>
  )
}
export default RoundBullet
useGLTF.preload('/newmodels/RoundBullet.gltf')
