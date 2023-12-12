import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import {Plane, OrthographicCamera} from "@react-three/drei";
import { Canvas } from '@react-three/fiber'
import {useState} from "react"
import Model from './components/Model'
import Table from './components/Table'
import Automatic from './components/Automatic'
import Bullet from './components/Bullet'
import CapacitorContacts from './components/CapacitorContacts'
import CapacitorSurface from './components/CapacitorSurface'
import Coil from './components/Coil'
import ContactRoad from './components/ContactRoad'
import DeskForGun from './components/DeskForGun'
import DeskWithSurface from './components/DeskWithSurface'
import Floor from './components/Floor'
import GunsTrunk from './components/GunsTrunk'
import LightBulb from './components/LightBulb'
import PendulumBasis from './components/PendulumBasis'
import PowerSocket from './components/PowerSocket'
import RegulatorBase from './components/RegulatorBase'
import RegulatorWheel from './components/RegulatorWheel'
import SinkerLine from './components/SinkerLine'
import Voltmeter from './components/Voltmeter'
import Walls from './components/Walls'
import WiresForAutomatic from './components/WiresForAutomatic'
import WiresForAutomatRegulator from './components/WiresForAutomatRegulator'
import Capacitor from './components/Capacitor'
import Fireflies from './components/Fireflies'
import {Physics} from "@react-three/cannon";

function App() {
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
              <Fireflies count={50} />
              <Table shadows/>
              <DeskWithSurface/>
              {/*<Walls/>*/}
              <Capacitor/>
              <SinkerLine/>
              <Voltmeter/>
              <WiresForAutomatic/>
              <WiresForAutomatRegulator/>
              <Floor/>
              <Automatic/>
              <Bullet/>
              <CapacitorContacts/>
              <CapacitorSurface/>
              <Coil/>
              <ContactRoad/>
              <DeskForGun/>
              <GunsTrunk/>
              <LightBulb/>
              <PendulumBasis/>
              <PowerSocket/>
              <RegulatorWheel/>
              <RegulatorBase/>
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
