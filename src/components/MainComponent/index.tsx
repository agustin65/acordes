"use client";
import { useGlobalState } from "../globalState";
import ShowAcorde from "../ShowAcorde";
import Botones from "./Controles";

export default function Main() {
    const { acordeActual, setAcordeActual } = useGlobalState()

    const { cuerdas } = acordeActual

    const toggleNota = (nota: number, cuerda: number) => {
        if (cuerdas[cuerda].includes(nota)) setAcordeActual(s => ({
            ...s,
            cuerdas: s.cuerdas.map((c, key) => key === cuerda ? c.filter(n => n !== nota) : c)
        }))
        else setAcordeActual(s => ({
            ...s,
            cuerdas: s.cuerdas.map((c, key) => key === cuerda ? [...c, nota] : c)
        }))
    }

    const toggleCuerdaMuda = (posicion: number) => {
        setAcordeActual(s => ({
            ...s,
            mudas: s.mudas.map((v, key) => key === posicion ? !v : v)
        }))
    }

    return <section className="max-w-3xl w-full flex flex-col gap-4 lg:gap-8">
        <ShowAcorde
            acorde={acordeActual}
            toggleNota={toggleNota}
            toggleCuerdasMudas={toggleCuerdaMuda}
            compararNotas
        />

        <Botones />
    </section>
}