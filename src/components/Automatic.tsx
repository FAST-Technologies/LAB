/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 Automat.glb 
*/


import { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Group } from 'three'

const Automatic = (props: any) => {
  const group = useRef<Group>(null)
  const { nodes, materials, animations } = useGLTF('/models/Automatic.glb') as any
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Cube001" position={[-15.241, 18.453, 7.958]} rotation={[0, Math.PI / 2, 0]} scale={[0.451, 0.188, 0.566]}>
          <mesh name="Cube002" geometry={nodes.Cube002.geometry} material={materials.Material} />
          <mesh name="Cube002_1" geometry={nodes.Cube002_1.geometry} material={materials['Material.011']} />
        </group>
        <mesh name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={materials['Material.011']} position={[-14.898, 18.653, 7.957]} rotation={[-2.899, 0, -Math.PI / 2]} scale={[-0.097, -0.193, -0.097]} />
        <mesh name="Cylinder002" geometry={nodes.Cylinder002.geometry} material={materials['Material.011']} position={[-15.582, 18.653, 7.956]} rotation={[-2.899, 0, -Math.PI / 2]} scale={[-0.097, -0.193, -0.097]} />
      </group>
    </group>
  )
}

export default Automatic

useGLTF.preload('/models/Automatic.glb')