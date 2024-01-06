import {Suspense, useEffect, useMemo} from 'react'
import { OrbitControls } from '@react-three/drei'
import {Plane, OrthographicCamera} from "@react-three/drei";
import {RigidBody} from '@react-three/rapier'
import { Canvas } from '@react-three/fiber'
import {useState} from "react"
import Woltmeter from "./newcomponents/Woltmeter";
// import Model from './components/Model'
// import Table from './components/Table'
// import Automatic from './components/Automatic'
// import Bullet from './components/Bullet'
// import CapacitorContacts from './components/CapacitorContacts'
// import CapacitorSurface from './components/CapacitorSurface'
// import Coil from './components/Coil'
// import ContactRoad from './components/ContactRoad'
// import DeskForGun from './components/DeskForGun'
// import DeskWithSurface from './components/DeskWithSurface'
// import Floor from './components/Floor'
// import GunsTrunk from './components/GunsTrunk'
// import LightBulb from './components/LightBulb'
// import PendulumBasis from './components/PendulumBasis'
// import PowerSocket from './components/PowerSocket'
// import RegulatorBase from './components/RegulatorBase'
// import RegulatorWheel from './components/RegulatorWheel'
// import SinkerLine from './components/SinkerLine'
// import Voltmeter from './components/Voltmeter'
// import Walls from './components/Walls'
// import WiresForAutomatic from './components/WiresForAutomatic'
// import WiresForAutomatRegulator from './components/WiresForAutomatRegulator'
// import Capacitor from './components/Capacitor'
import Fireflies from './components/Fireflies'
import {Physics} from "@react-three/cannon";
// import Buttons from "./components/Buttons";
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
import RegulatorBase from "./newcomponents/RegulatorBase";
import RegulatorButton from "./newcomponents/RegulatorButton";
import Scene from "./newcomponents/Scene";
import Switcher1 from "./newcomponents/Switcher1";
import Switcher2 from "./newcomponents/Switcher2";
import Table from "./components/Table";
import Thread from "./newcomponents/Thread";
import TwoWires from "./newcomponents/TwoWires";
import Weight from "./newcomponents/Weight";
import WireClemmRegulator from "./newcomponents/WireClemmRegulator";
import WireWoltmeterGegulator from "./newcomponents/WireWoltmeterGegulator";

function App(props: any) {
  const [loaded, setLoaded] = useState(false)

  return (
      <Canvas
          shadows
          dpr={[1, 5]}
          camera={{ fov: 75, position: [10, 10, 8]}}
      >

        {/*<OrthographicCamera makeDefault position={[0, 0, 1]} />*/}
        <OrbitControls />
        <color attach="background" args={['#1e2243']} />
        <hemisphereLight intensity={0.65}/>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
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
                <Button1/>
                <CannonLegs/>
                <CapacitorPlata/>
                <Capacitor/>
                <CapContact1/>
                <Clemm/>
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
                <RegulatorBase/>
                <RegulatorButton/>
                <Scene/>
                <Switcher1/>
                <Switcher2/>
                <Table/>
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
      </Canvas>
  )
}

export default App
