/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Stol.gltf 
*/

import React, {useEffect, useRef, useState} from 'react'
import { useGLTF } from '@react-three/drei'
import styles from "./Woltmeter.module.css";
import useKeyboardHook from "../functionalComponents/useKeyboardHook";
import {useFrame} from "@react-three/fiber";

const Stol = (props: any) => {
    const ref = useRef() as any
    const keyMap = props.keyMap
    const [data, setData] = useState<number>(0)
    const [click, setClick] = useState<boolean>(false)
    const [selected, setSelected] = useState(props.selected)
    const [colord, setColor] = useState<boolean>(false)

    useEffect(()=>{
        console.log(ref.current)
    })
    const getClick = () => {
        setClick(!click)
        // setColor(!colord)
        if (click) {
            return (
                <p className={styles.datee}>Начальное значение {data} Вольт</p>
            )
        }
    }

    const changeData = () => {
        if (!click) {
            return (

                <p className={styles.datee}>Начальное значение {data} Вольт</p>
            )
        }
    }
  const { nodes, materials } = useGLTF('/newmodels/Stol.gltf') as any
    useFrame((i,delta)=>{
        keyMap['KeyA'] && selected && (ref.current.position.x-=delta)
        keyMap['KeyD'] && selected && (ref.current.position.x+=delta)
        keyMap['KeyW'] && selected && (ref.current.position.z-=delta)
        keyMap['KeyS'] && selected && (ref.current.position.z+=delta)
    })
  return (
    <group  {...props} dispose={null} ref={ref} castShadow receiveShadow onPointerDown={()=>setSelected(!selected)}>
      <mesh castShadow geometry={nodes.iron_table.geometry} material={materials['Artisan oak, kronospan, wood.']}
            position={[15.501, 8.057, -14.781]}
            scale={[0.523, 8.698, 0.523]}
            ref={ref}
            onClick={getClick}
      >
          {/*<meshBasicMaterial wireframe={!selected}/>*/}
      </mesh>
    </group>
  )
}

export default Stol

useGLTF.preload('/newmodels/Stol.gltf')
