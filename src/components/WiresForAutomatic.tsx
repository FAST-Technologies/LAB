/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 wires_automat.glb 
*/

import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const WiresForAutomatic = (props: any) => {
  const { nodes, materials } = useGLTF('/models/WiresForAutomatic.glb') as any
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Провод_питания001.geometry} material={materials['Material.015']} position={[-14.752, 18.075, 9.428]} scale={[0.686, 1.042, 0.686]} />
    </group>
  )
}

export default WiresForAutomatic

useGLTF.preload('/models/WiresForAutomatic.glb')
