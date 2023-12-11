import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
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

function App() {
  return (
      <Canvas dpr={[1, 2]} camera={{ fov: 45, position: [-4, 2, -4] }}>
        <Suspense fallback={null}>
          <color attach="background" args={['#1e2243']} />
          <Fireflies count={50} />
          <Table/>
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
          <OrbitControls />
        </Suspense>
      </Canvas>
  )
}

export default App
