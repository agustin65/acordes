//import tocarNota from "@/components/sonidos/tocarNota";
import Boton from "./Boton"
import { FaGuitar } from "react-icons/fa6";
import * as Tone from 'tone';
import { useState } from "react";

export default function Rasguear() {

    const synth = new Tone.PolySynth().toDestination();

    const tocarNota = () => {
        if (Tone.context.state !== 'running') Tone.start()

        synth.triggerAttackRelease(['D5', 'A5','D4','F#4'], '8n')
    }

    return <Boton
        action={tocarNota}
        colores="text-[#222]"
    >
        <FaGuitar />
    </Boton>
}

