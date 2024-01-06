/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Bullet.gltf 
*/

import React, {useMemo, useRef, useState} from 'react'
import { useGLTF } from '@react-three/drei'
import {useControls} from "leva";

const Bullet = (props: any) => {
    const options = useMemo(()=>{
        return{
            x: {value: 0, min: 0, max: 20, step: 0.01},
            y: {value: 0, min: 0, max: 20, step: 0.01},
            z: {value: 0, min: 0, max: 20, step: 0.01},
            visible: true,
            color: {value: '#1e2243'}
        }
    },[])
    const Bullett = useControls("Bullet", options)
  const { nodes, materials } = useGLTF('/newmodels/Bullet.gltf') as any
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cylinder010.geometry} material={materials['Iron with Splashed Paint']} position={[-1.69, 17.507, 5.664]} scale={0.232} />
    </group>
  )
}
export default Bullet

useGLTF.preload('/newmodels/Bullet.gltf')
