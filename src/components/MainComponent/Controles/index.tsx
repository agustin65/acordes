import { TRASTES_GUITARRA } from "@/components/lib";
import { useGlobalState, acordeInicial } from "@/components/globalState";
import { useState } from "react";
import Reset from "./Botones/Reset";
import Save from "./Botones/Save";
import Scales from "./Botones/Scales";
import Octaves from "./Botones/Octaves";
import FRLeft from "./Botones/FrLeft";
import FRRight from "./Botones/FrRight";
import ResolverConflicto from "./ResolverConflicto";
import GuardarNombre from "./GuardarNombre";

const limite_superior = TRASTES_GUITARRA - 2

export default function Botones() {
    const { acordeActual, setAcordeActual, setEscala, saveAcorde, acordesGuardados } = useGlobalState()

    const { offset, nombre } = acordeActual

    const reset = () => setAcordeActual(acordeInicial)

    const setOffset = (val: number) => {
        setAcordeActual(s => ({
            ...s,
            offset: val
        }))
    }

    const setNombre = (val: string) => setAcordeActual(s => ({
        ...s,
        nombre: val
    }))

    //logica de guardado
    const [hayConflicto, setHayConflicto] = useState(false)
    const [showForm, setShowForm] = useState(false)

    const guardar = () => {
        saveAcorde(acordeActual)
        reset()
        setShowForm(false)
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

    const canSave = Boolean(acordeActual.cuerdas.find(c => c.length))

    return <footer className="w-full flex flex-col items-center">
        {hayConflicto && <ResolverConflicto
            resolver={resolverConflicto}
        />}

        <section className="w-full flex text-center gap-2 md:gap-4 [&>*]:basis-full text-xl sm:text-2xl md:text-4xl">
            <Reset action={reset} />
            <Octaves />
            <FRLeft
                action={offset > 1 ? () => setOffset(offset - 1) : undefined}
            />

            <h1 className="min-h-full grid place-content-center">{offset}fr</h1>

            <FRRight
                action={offset < limite_superior ? () => setOffset(offset + 1) : undefined}
            />
            <Scales />
            <Save
                action={canSave ? () => setShowForm(v => !v) : undefined}
            />
        </section>

        <GuardarNombre
            isOpen={showForm}
            nombre={nombre}
            setNombre={setNombre}
            close={() => setShowForm(false)}
            save={saveHandler}
        />
    </footer>
}