"use client";
import Header from "./Header";
import { useGlobalState } from "../globalState"
import Display from "./Display";
import localizarNotas from "@/functions/localizarNotas";

export default function Escalas() {
    const { escala, setEscala, acordeActual } = useGlobalState()

    const { isOpen, tono, tipo } = escala

    return <section
        className={'transition-all gap-4 md:gap-8 items-center w-full flex flex-col ' + (isOpen ? '' : 'pointer-events-none opacity-0')}
        style={{ maxHeight: isOpen ? '50rem' : 0 }}
    >
        <Header
            tono={tono}
            tipo={tipo}
            setEscala={setEscala}
        />
        <Display
            tono={tono}
            tipo={tipo}
            notasDeAcorde={localizarNotas(acordeActual.cuerdas, acordeActual.mudas)}
        />
    </section>

}