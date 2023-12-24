import create from "zustand"
import { subscribeWithSelector } from "zustand/middleware"
import React from 'react';

const UseAudioHook = create(
    subscribeWithSelector((set)=>({
        audio: true,
        toggleAudio: () => set((state: any)=>({audio: !state.audio}))
    }))
)

export default UseAudioHook