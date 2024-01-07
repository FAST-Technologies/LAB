/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Stol.gltf 
*/

import React, {useRef, useState} from 'react'
import { useGLTF } from '@react-three/drei'
import styles from "./Woltmeter.module.css";

const Stol = (props: any) => {
    const ref = useRef() as any
    const [data, setData] = useState<number>(0)
    const [click, setClick] = useState<boolean>(false)
    const [colord, setColor] = useState<boolean>(false)
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
  return (
    <group  {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.iron_table.geometry} material={materials['Artisan oak, kronospan, wood.']}
            position={[15.501, 8.057, -14.781]}
            scale={[0.523, 8.698, 0.523]}
            ref={ref} onClick={getClick}
      >
      </mesh>
    </group>
  )
}

export default Stol

useGLTF.preload('/newmodels/Stol.gltf')
