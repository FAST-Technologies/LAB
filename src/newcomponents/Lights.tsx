import React, {useMemo, useRef} from 'react';
import {useControls} from "leva";
import * as THREE from 'three';


const Lights = () => {
    const ambientRef = useRef() as any
    const directionalRef = useRef() as any
    const pointRef = useRef() as any
    const spotRef = useRef() as any
    const hemisphereRef = useRef() as any
    const options = useMemo(()=>{
        return{
            castShadow : {
                value: true,
                onChange: (v: any) => {
                    directionalRef.current.castShadow = v
                },
            },
            decay: {
                value: 0,
                min: 0,
                max: 2,
                step: 0.01
            },
            angle: {
                value: 0,
                min: 0,
                max: 360,
                step: 0.01
            },
            x: {value: 0, min: -20, max: 20, step: 0.01},
            y: {value: 0, min: -20, max: 20, step: 0.01},
            z: {value: 0, min: -20, max: 20, step: 0.01},
            intensity: {
                value: 0,
                min: -Math.PI,
                max: Math.PI,
                step: 0.01
            },
            visible: {
                value: true,
                onChange: (v: any) => {
                    directionalRef.current.visible = v
                },
            },
            color: {
                value: 'white',
                onChange: (v: any) => {
                    directionalRef.current.color = new THREE.Color(v)
                },
            },
        }
    },[])

    const options1 = useMemo(()=>{
        return{
            castShadow : {
                value: true,
                onChange: (v: any) => {
                    directionalRef.current.castShadow = v
                },
            },
            decay: {
                value: 0,
                min: 0,
                max: 2,
                step: 0.01
            },
            angle: {
                value: 0,
                min: 0,
                max: 360,
                step: 0.01
            },
            visible: {
                value: true,
                onChange: (v: any) => {
                    ambientRef.current.visible = v
                },
            },
            intensity: {
                value: 0,
                min: 0,
                max: 2,
                step: 0.01
            },
            color: {
                value: 'white',
                onChange: (v: any) => {
                    ambientRef.current.color = new THREE.Color(v)
                },
            },
        }
    },[])


    // @ts-ignore
    useControls('Directional Light', options)
// @ts-ignore
    useControls('Ambient Light', options1)
    // @ts-ignore
    useControls('Point Light', options)

    // @ts-ignore
    useControls('Spot Light', options)

    // @ts-ignore
    useControls('Hemisphere Light', options)

    return (
        <>
            <ambientLight ref={ambientRef} />
            <directionalLight ref={directionalRef} />
            <pointLight ref={pointRef} />
            <spotLight ref={spotRef} />
            <hemisphereLight ref={hemisphereRef}/>
        </>
    )
}

export default Lights