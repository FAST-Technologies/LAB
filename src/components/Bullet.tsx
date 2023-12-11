/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 Pula.glb 
*/


import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Bullet = (props: any) => {
  const { nodes, materials } = useGLTF('/models/Bullet.glb') as any
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cylinder010.geometry} material={materials['Iron with Splashed Paint']} position={[-2.873, 18.092, 2.096]} scale={0.232} />
    </group>
  )
}

export default Bullet

useGLTF.preload('/models/Bullet.glb')
