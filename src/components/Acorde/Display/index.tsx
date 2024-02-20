"use client";
import { Dispatch, SetStateAction } from "react";
import Cabezal from "./Cabezal";
import Cuerda from "./Cuerda";
import ToggleOffset from "./ToggleOffset";
import FrMarker from "./FrMarker";

export default function Display({
    acorde,
    reset,
    setAcorde
}: {
    acorde: AcordeType
    reset: () => void
    setAcorde: Dispatch<SetStateAction<AcordeType>>
}) {
    const { offset, cuerdas, nombre, } = acorde

    //logica de edicion
    const toggleNota = (nota: number, cuerda: number) => {
        if (cuerdas[cuerda].includes(nota)) setAcorde(s => ({
            ...s,
            cuerdas: s.cuerdas.map((c, key) => key === cuerda ? c.filter(n => n !== nota) : c)
        }))
        else setAcorde(s => ({
            ...s,
            cuerdas: s.cuerdas.map((c, key) => key === cuerda ? [...c, nota] : c)
        }))
    }

    const setOffset = (val: number) => {
        setAcorde(s => ({
            ...s,
            offset: val
        }))
    }

    const cabezalVisible = offset === 1

    return <section className="w-full max-w-lg flex flex-col gap-2 items-center">
        <article className="w-full flex relative acorde bg-[#f9f9f9]">
            <Cabezal visible={cabezalVisible} />

            {!cabezalVisible && <div className="difuminar-izquierda w-1/5 absolute left-0 top-0 h-full" />}

            <section className="flex flex-col basis-full">
                {cuerdas.map((c, key) => <Cuerda
                    key={'cuerda_' + key}
                    notas={c}
                    offset={offset}
                    toggleNota={nota => toggleNota(nota, key)}
                    cuerdaSup={cuerdas[key - 1]}
                    cuerdaInf={cuerdas[key + 1]}
                />)}
            </section>
            <div className="difuminar-derecha w-1/5 absolute right-0 top-0 h-full" />
        </article>
        <FrMarker offset={offset} />
        <ToggleOffset
            offset={offset}
            setOffset={setOffset}
            reset={reset}
        />
    </section>
}