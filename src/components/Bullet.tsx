/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 Pula.glb 
*/
import {Vector3} from "three";

export interface bull {
    position: number[]
    color?: string
    intensity?: number
    orbitalOffset?: number
    orbitalSpeed?: number
    props: any
}
import {useRef, useState} from 'react'
import {useGLTF, useAnimations, Plane} from '@react-three/drei'
import {useFrame} from "@react-three/fiber";
// {position, color, intensity, orbitalOffset = 0, orbitalSpeed = 1, props}: bull
const Bullet = (props: any) => {
    const group=useRef<any>()
  const { nodes, materials, animations } = useGLTF('/models/Bullet.glb') as any
    const [clickas, setClickas] = useState<boolean>(false)
    const [posin, setPosin] = useState<boolean>(false)
    const [hovered, hover] = useState<boolean>(false)
    const {actions, names}=useAnimations(animations, group)
    const [xrotation, setXRotation]=useState<number>(0)
    const [yrotation, setYRotation]=useState<number>(0)
    const [zrotation, setZRotation]=useState<number>(0)
    const [xposition, setXPosition]=useState<number>(0)
    const [yposition, setYPosition]=useState<number>(0)
    const [zzposition, setZPosition]=useState<number>(0)
    const ref = useRef<any>();
    // useFrame(() => {
    //     let date = Date.now() * orbitalSpeed * 0.001 + orbitalOffset;
    //     ref.current.position.set(
    //         Math.cos(date) * 2 + position[0],
    //         Math.sin(date) * 2 + position[1],
    //         Math.sin(date) * 2 + position[2]
    //     );
    // });
    console.log(names)
    const getClick = () => {
        setClickas(!clickas)
        setPosin(!posin)
    }
    const speed: number = 1
    let zposition : number=18
    let time : number = 0
    function position1() {
        if (!posin) {
            while (time < 10) {
                zposition += speed
                time++
            }
        }
    }
    const Xposition = -4
    const Yposition= 18
    const Zposition = 4

  return (
      // <Plane
      //     // args={[size, size, size, size]}
      //     rotation={[1.5 * Math.PI, 0, 0]}
      //     position={[-4, 18, 4]}
      // >
      <group  ref={ref} dispose={null}>
      <mesh
          geometry={nodes.Cylinder010.geometry}
          material={materials['Iron with Splashed Paint']}
          // position={!posin ? [-4, 18, 4] : [-4.873, 28, 4.096]}
          position ={[Xposition, Yposition, Zposition]}
          scale={clickas ? 0.4 : 0.232}
          rotation={[
              xrotation*Math.PI,
              yrotation*Math.PI,
              zrotation*Math.PI
          ]}
          onClick={getClick}
          onPointerOver={(event) => (event.stopPropagation(), hover(true))}
          onPointerOut={(event) => hover(false)}
      />
    </group>
      // </Plane>
  )
}

export default Bullet

useGLTF.preload('/models/Bullet.glb')
