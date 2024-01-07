/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Switcher2.gltf 
*/

import React, {useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import Switcher1 from "./Switcher1";

const Switcher2 = (props: any) => {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/newmodels/Switcher2.gltf') as any
    const { actions } = useAnimations(animations, group)
    const [click, setClick] = useState(false)
    const getClick = () => {
        setClick(!click)
    }
    return (
        <group ref={group} {...props} dispose={null}>
          <group name="Scene">
            <mesh name="Cylinder002"
                  geometry={nodes.Cylinder002.geometry}
                  material={materials['Material.011']}
                  position={[-15.582, 18.066, -16.956]}
                  rotation={!click ? [-2.899+1.3, 0, -Math.PI/2] : [-2.899, 0, -Math.PI / 2]}
                  scale={[-0.097, -0.193, -0.097]}
                  onClick={getClick}
            />
          </group>
        </group>
    )
}
export default Switcher2
useGLTF.preload('/newmodels/Switcher2.gltf')
