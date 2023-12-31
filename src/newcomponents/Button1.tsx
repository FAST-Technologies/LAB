/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Button1.gltf 
*/

import React, { useRef, useState} from 'react'
import { useGLTF } from '@react-three/drei'

const Button1 = (props: any) => {
    const { nodes, materials } = useGLTF('/newmodels/Button1.gltf') as any
    const [click, setClick] = useState<boolean>(false)
    const [active, setActive] = useState<boolean>(false)
    const getButton = () => {
        setClick(!click)
        setActive(!active)
    }
    return (
        <group {...props} dispose={null}>
          <mesh
              geometry={nodes.Cylinder003.geometry}
              material={materials['Material.009']}
              position={!click ? [-5.75, 17.629, -19.957] : [-5.75, 17.729, -19.957]}
              scale={[0.493, 0.072, 0.493]}
              onClick={getButton}
          />
        </group>
    )
}
export default Button1

useGLTF.preload('/newmodels/Button1.gltf')
