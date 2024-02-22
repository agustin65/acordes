import { ESCALAS, NOTAS, type Escalas, type Nota } from "@/components/lib";
import type { Dispatch, SetStateAction } from "react";
import Selector from "./Selector";
import { EscalaContext } from "@/components/globalState";
import Boton from "../../oldAcorde/Display/ToggleOffset/Boton";
import { FaTimes } from "react-icons/fa";

export default function Header({
    tipo,
    tono,
    setEscala,
    close
}: {
    tipo: Escalas,
    tono: Nota,
    setEscala: Dispatch<SetStateAction<EscalaContext>>
    close: () => void
}) {

    const change = (val: Nota | Escalas, key: 'tono' | 'tipo') => {
        setEscala(s => ({
            ...s,
            [key]: val
        }))
    }

    return <header className="flex items-center justify-between w-full gap-4 text-2xl md:text-3xl relative">
        <div className="flex flex-col items-start md:flex-row md:items-center gap-2 md:gap-4">
            Escala
            <section className="flex gap-2">
                <Selector
                    selected={tono}
                    change={val => change(val as Nota, 'tono')}
                    items={NOTAS}
                    classes="w-20"
                />
                <Selector
                    selected={tipo}
                    change={val => change(val as Escalas, 'tipo')}
                    items={ESCALAS}
                    classes="w-40"
                />
            </section>
        </div>

        <Boton action={close} colores="">
            <FaTimes />
        </Boton>
    </header>
}