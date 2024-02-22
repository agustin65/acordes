"use client";
import Header from "./Header";
import Display from "./Display";
import { useGlobalState } from "../globalState";
import localizarNotas from "../oldAcorde/localizarNotas";

export default function Escalas() {
    const { escala, setEscala, acordeActual } = useGlobalState()

    const { tono, tipo } = escala

    const toggleIsOpen = (isOpen: boolean) => setEscala(s => ({
        ...s,
        isOpen
    }))

    if (escala.isOpen) return <section className="w-fit max-w-4xl flex flex-col gap-8 items-center ">
        <Header
            tipo={tipo}
            tono={tono}
            setEscala={setEscala}
            close={() => toggleIsOpen(false)}
        />
        <Display
            tipo={tipo}
            tono={tono}
            notasDeAcorde={localizarNotas(acordeActual.cuerdas, acordeActual.mudas)}
        />
    </section>

    return <button onClick={() => toggleIsOpen(true)} className="px-6 py-3 my-16 text-3xl shadow-lg bg-[#909090] hover:bg-[#aaa] active:bg-[#888] shadow-black/20 rounded-xl text-[#eee] transition-all hover:scale-105 active:scale-100 " >
        Usar Escalas
    </button>
}