import Select from "./Select"
import { ESCALAS, NOTAS, type Escalas, type Nota } from "@/components/lib";
import type { Dispatch, SetStateAction } from "react";
import { EscalaContext } from "@/components/globalState";


export default function Header({
    tipo,
    tono,
    setEscala
}: {
    tipo: Escalas,
    tono: Nota,
    setEscala: Dispatch<SetStateAction<EscalaContext>>
}) {

    const change = (val: Nota | Escalas, key: 'tono' | 'tipo') => {
        setEscala(s => ({
            ...s,
            [key]: val
        }))
    }

    return <header className="text-2xl md:text-4xl w-fit flex flex-row sm:justify-center sm:px-[15vw] gap-2 sm:gap-4 items-center">
        <h1>Escala:</h1>
        <section className="flex gap-2 w-full min-w-60 md:min-w-80 max-w-80">
            <Select
                selected={tono}
                change={val => change(val as Nota, 'tono')}
                items={NOTAS}
                classes="w-1/3"
            />
            <Select
                selected={tipo}
                change={val => change(val as Escalas, 'tipo')}
                items={ESCALAS}
                classes="w-2/3"
            />
        </section>
    </header>
}