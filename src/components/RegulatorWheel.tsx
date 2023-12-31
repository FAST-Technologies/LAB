/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 regulator_wheel.glb 
*/

import {useRef, useState} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const RegulatorWheel = (props: any) => {
    const [clicked, click] = useState<boolean>(false)
    const setClick = () => {
        click(!clicked)
    }
  const group = useRef() as any
  const { nodes, materials, animations } = useGLTF('/models/RegulatorWheel.glb') as any
  const { actions } = useAnimations(animations, group) as any
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
            name="Регулятор_напряжения"
            geometry={nodes.Регулятор_напряжения.geometry}
            material={materials['Material.011']}
            position={[-14.923, 18.563, 4.908]}
            scale={clicked ? [2, 0.29, 0.608]  : [0.608, 0.09, 0.608]} />
      </group>
    </group>
  )
}

export default RegulatorWheel

useGLTF.preload('/models/RegulatorWheel.glb')
