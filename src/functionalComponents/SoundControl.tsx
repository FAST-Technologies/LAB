import React, {useEffect, useMemo} from 'react';
import useAudioHook from "./useAudioHook"

const SoundControl = () => {
    const audio = useAudioHook((state: any)=>state.audio)
    const mainSound = useMemo(()=>{
        const sound = new Audio()
        sound.volume = 0.2
        return sound
    },[])

    const backgroundSound = useMemo(()=>{
        const sound = new Audio()
        sound.loop = true
        return sound
    },[])

    useEffect(()=>{

    },[])

    useEffect(()=>{
        mainSound.muted = !audio
        backgroundSound.muted = !audio
    }, [audio])
    return null
};

export default SoundControl;