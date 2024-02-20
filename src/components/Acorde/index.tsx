"use client";
import { useState } from "react";
import { CUERDAS_GUITARRA } from "../lib";
import Display from "./Display";
import Notas from "./Notas";
import localizarNotas from "./localizarNotas";
import { useGlobalState, acordeInicial } from "../globalState";
import ResolverConflicto from "./ResolverConflicto";
import Nombre from "./Nombre";
import armarEscala from "../Escalas/Display/armarEscala";
import calcularOctavas from "./Notas/calcularOctava";

export default function Acorde() {

    const { acordeActual, setAcordeActual, acordesGuardados, saveAcorde, escala, verOctavos } = useGlobalState()

    const resetHandler = () => {
        setAcordeActual(acordeInicial)
    }

    const toggleCuerdaMuda = (posicion: number) => {
        setAcordeActual(s => ({
            ...s,
            mudas: s.mudas.map((v, key) => key === posicion ? !v : v)
        }))
    }

    const setNombre = (val: string) => {
        setAcordeActual(s => ({
            ...s,
            nombre: val
        }))
    }

    //logica de guardado
    const [hayConflicto, setHayConflicto] = useState(false)

    const guardar = () => {
        saveAcorde(acordeActual)
        resetHandler()
    }

    const saveHandler = () => {
        if (!acordeActual.nombre) return alert('Ingresa un nombre')
        if (acordesGuardados.find(a => a.nombre === acordeActual.nombre)) setHayConflicto(true)
        else guardar()
    }

    const resolverConflicto = (reescribir: boolean) => {
        if (reescribir) guardar()
        setHayConflicto(false)
    }

    const canSave = Boolean(acordeActual.cuerdas.find(c => c.length)) && acordeActual.nombre.length > 0

    return <div className="flex flex-col gap-8 w-full items-center" >
        {hayConflicto && <ResolverConflicto
            resolver={resolverConflicto}
        />}
        <section className="flex w-full justify-center gap-2 md:gap-4">
            <Notas
                notas={CUERDAS_GUITARRA}
                cuerdasMudas={acordeActual.mudas}
                toggleCuerdaMuda={toggleCuerdaMuda}
                octavas={verOctavos ? calcularOctavas(new Array(6).fill([])) : undefined}
            />
            <Display
                acorde={acordeActual}
                setAcorde={setAcordeActual}
                reset={resetHandler}
            />
            <Notas
                notas={localizarNotas(acordeActual.cuerdas, acordeActual.mudas)}
                cuerdasMudas={acordeActual.mudas}
                toggleCuerdaMuda={toggleCuerdaMuda}
                escala={escala.isOpen ? armarEscala(escala.tono, escala.tipo) : undefined}
                octavas={verOctavos ? calcularOctavas(acordeActual.cuerdas) : undefined}
            />
        </section>
        <Nombre
            nombre={acordeActual.nombre}
            setNombre={setNombre}
            save={canSave ? saveHandler : undefined}
        />
    </div>
}