/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Button.gltf 
*/

import React, { useRef, useState} from 'react'
import { useGLTF } from '@react-three/drei'

const Button = (props: any) => {
    const { nodes, materials } = useGLTF('/newmodels/Button.gltf') as any
    const [click, setClick] = useState<boolean>(false)
    const [active, setActive] = useState<boolean>(false)
    const getButton = () => {
        setClick(!click)
        setActive(!active)
    }
    return (
        <group {...props} dispose={null}>
          <mesh
              geometry={nodes.Cylinder.geometry}
              material={materials['Material.009']}
              position={!click ? [-12.418, 17.629, -19.861] : [-12.418, 17.729, -19.861]}
              scale={[0.493, 0.072, 0.493]}
              onClick={getButton}
          />
        </group>
    )
}
export default Button

useGLTF.preload('/newmodels/Button.gltf')
