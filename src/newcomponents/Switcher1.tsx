/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Switcher1.gltf 
*/

import React, {useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Switcher1 = (props: any) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/newmodels/Switcher1.gltf') as any
    const [click, setClick] = useState(false)
    const getClick = () => {
        setClick(!click)
    }
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
            name="Cylinder001"
            geometry={nodes.Cylinder001.geometry}
            material={materials['Material.011']}
            position={[-14.898, 18.066, 7.957]}
            rotation={!click ? [-2.899+1.3, 0, -Math.PI/2] :[-2.899, 0, -Math.PI / 2]}
            scale={[-0.097, -0.193, -0.097]}
            onClick={getClick}/>
      </group>
    </group>
  )
}
export default Switcher1
useGLTF.preload('/newmodels/Switcher1.gltf')
