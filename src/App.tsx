import React, {Suspense, useEffect, useMemo} from 'react'
import {Html, OrbitControls, PointerLockControls} from '@react-three/drei'
import {Plane, OrthographicCamera} from "@react-three/drei";
import {RigidBody} from '@react-three/rapier'
import { Canvas } from '@react-three/fiber'
import {useState} from "react"
import Woltmeter from "./newcomponents/Woltmeter";
import Fireflies from './components/Fireflies'
import {Physics} from "@react-three/cannon";
import useAudioHook from "./functionalComponents/useAudioHook";
import * as THREE from "three"
import WoltmeterGlass from "./newcomponents/WolmeterGlass";
import Automatic from "./newcomponents/Automatic";
import AutomaticWire from "./newcomponents/AutomaticWire";
import Base from "./newcomponents/Base";
import BaseButton1 from "./newcomponents/BaseButton1";
import Bullet from "./newcomponents/Bullet";
import Button from "./newcomponents/Button";
import Button1 from "./newcomponents/Button1";
import CannonLegs from "./newcomponents/CannonLegs";
import CapacitorPlata from "./newcomponents/CapacitorPlata";
import Capacitor from "./newcomponents/Capatitor";
import CapContact1 from "./newcomponents/CapContact1";
import Clemm from "./newcomponents/Clemm";
import Coil from "./newcomponents/Coil";
import Contact1 from "./newcomponents/Contact1";
import Contact1Button1 from "./newcomponents/Contact1Button1";
import Contact1Capacitor from "./newcomponents/Contact1Capacitor";
import Contact1Clemm from "./newcomponents/Contact1Clemm";
import Contact1Diod from "./newcomponents/Contact1Diod";
import Contact1Lamp from "./newcomponents/Contact1Lamp";
import Contact2 from "./newcomponents/Contact2";
import Contact2Button1 from "./newcomponents/Contact2Button1";
import Contact2Cap from "./newcomponents/Contact2Cap";
import Contact2Capacitor from "./newcomponents/Contact2Capacitor";
import Contact2Diod from "./newcomponents/Contact2Diod";
import Contact2Lamp from "./newcomponents/Contact2Lamp";
import Contacts from "./newcomponents/Contacts";
import Diod from "./newcomponents/Diod";
import Lamp from "./newcomponents/Lamp";
import LampHolder from "./newcomponents/LampHolder";
import Pendulum from "./newcomponents/Pendulum";
import Pipe from "./newcomponents/Pipe";
import Plata from "./newcomponents/Plata";
import RegulatorButton from "./newcomponents/RegulatorButton";
import Scene from "./newcomponents/Scene"
import Switcher1 from "./newcomponents/Switcher1";
import Switcher2 from "./newcomponents/Switcher2";
import Thread from "./newcomponents/Thread";
import TwoWires from "./newcomponents/TwoWires";
import Weight from "./newcomponents/Weight";
import WireClemmRegulator from "./newcomponents/WireClemmRegulator";
import WireWoltmeterGegulator from "./newcomponents/WireWoltmeterGegulator";
import {Clemm2} from "./newcomponents/Clemm2";
import RegulatorBase2 from "./newcomponents/RegulatorBase2";
import ClemmButton from "./newcomponents/ClemmButton";
import Stol from "./newcomponents/Stol";
import Fon from "./newcomponents/Fon";
import {Stats, Environment, useGLTF} from "@react-three/drei";
import {Perf} from "r3f-perf"
import {useControls} from "leva";
import Lights from "./newcomponents/Lights";
// import Model1 from "./newcomponents/Model1";

export type bull = {
  classic: string,
  round: string
}

const bullets: bull = {
  classic: "/newmodels/Bullet.gltf",
  round: "/newmodels/RoundBullet.gltf"
}

const phd: string[] = [
  "/newmodels/Bullet.gltf",
  "/newmodels/RoundBullet.gltf"
]

const dd = [

]

// const Model1 = ( {url} ) => {
//   const { scene } = useGLTF(url) as any
//   const [cache, setCache] = useState<any>({})
//
//   if (!cache[url]) {
//     const annotations: any[] = []
//
//     scene.traverse((o: any) => {
//       if (o.userData.prop) {
//         annotations.push(
//             <Html key={o.uuid} position={[o.position.x, o.position.y, o.position.z]} distanceFactor={1.25}>
//               <div className="annotation">{o.userData.prop}</div>
//             </Html>
//         )
//       }
//     })
//
//     console.log('Caching JSX for url ' + url)
//     setCache({
//       ...cache,
//       [url]: <primitive object={scene}>{annotations}</primitive>
//     })
//   }
//   return cache[url]
// }


function App(props: any) {
  const [loaded, setLoaded] = useState(false)


  const options = useMemo(()=>{
    return{
      x: {value: 0, min: 0, max: 20, step: 0.01},
      y: {value: 0, min: 0, max: 20, step: 0.01},
      z: {value: 0, min: 0, max: 20, step: 0.01},
      visible: true,
      color: {value: '#1e2243'}
    }
  },[])

  const Table = useControls("Table", options)

  const Woltmeterd=useControls("Woltmeter", options)

  const model = useControls("Bullet", {
        model: {
          value: "classic",
          option: Object.keys(bullets)
        }
      }
      )
  // @ts-ignore
  return (
      <>
      <Canvas
          shadows
          // dpr={[1, 5]}
          camera={{ fov: 60, position: [0, 60, -12]}}
      >
        {/*<group>*/}
        {/*  <Model1 url={bullets[model]}/>*/}
        {/*</group>*/}
        {/*<OrthographicCamera makeDefault position={[0, 0, 1]} />*/}
        <OrbitControls enablePan={false} enableDamping={false} target={[2,2,2]}/>
        <color attach="background" args={[options.color.value]} />
        {/*<Lights/>*/}
        <hemisphereLight intensity={0.65}/>
        <ambientLight intensity={Math.PI/2} />
        <spotLight color="yellow" position={[10, 10, 10]} angle={0.6} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        {/*<primitive object={gltf.scene} position={[0,0,0]}/>*/}
        <Suspense fallback={null}>
            <Physics>
              {/*<RigidBody*/}
              {/*    friction={1}*/}
              {/*    onContactForce={onPlay}*/}
              {/*    {...props}*/}
              {/*>*/}
              <group position={[0,0,0]}>
                <Fireflies count={50} />
                <WoltmeterGlass/>
                <Woltmeter/>
                <Automatic/>
                <AutomaticWire/>
                <Base/>
                <BaseButton1/>
                <Bullet/>
                <Button/>
                <Fon/>
                <Button1/>
                <CannonLegs/>
                <CapacitorPlata/>
                <Capacitor/>
                <ClemmButton/>
                <Stol
                    position={[Table.x, Table.y, Table.z]}
                    visible={Table.visible}
                    color={Table.color}
                />
                <Clemm/>
                <Clemm2/>
                <Coil/>
                <Contact1/>
                <Contact1Button1/>
                <Contact1Capacitor/>
                <Contact1Clemm/>
                <Contact1Diod/>
                <Contact1Lamp/>
                <Contact2/>
                <Contact2Button1/>
                <Contact2Cap/>
                <Contact2Capacitor/>
                <Contact2Diod/>
                <Contact2Lamp/>
                <Contacts/>
                <Diod/>
                <Lamp/>
                <LampHolder/>
                <Pendulum/>
                <Pipe/>
                <Plata/>
                <RegulatorBase2/>
                <RegulatorButton/>
                <Scene/>
                <Switcher1/>
                <Switcher2/>
                <Thread/>
                <TwoWires/>
                <Weight/>
                <WireClemmRegulator/>
                <WireWoltmeterGegulator/>
              </group>
              {/*</RigidBody>*/}
            </Physics>
        </Suspense>
        <gridHelper
            args={[200, 100, '#1100ff', '#1100ff']}
            position={[0, -1.26, 0]}
        />
        {/*<PointerLockControls selector="#button"/>*/}
        <axesHelper args={[30]}/>
        <Stats/>
        <Perf position="bottom-left"/>
      </Canvas>
      {/*<span id="info">The {model.replace(/([A-Z])/g, ' $1').toLowerCase()} is selected.</span>*/}
      </>
  )
}

export default App
