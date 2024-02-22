import { useGlobalState } from "@/components/globalState";
import Nota from "./Nota"
import { CUERDAS_GUITARRA, type Nota as NotaType } from "@/components/lib";
import armarEscala from "@/components/Escalas/Display/armarEscala";

export default function Notas({
    notas = CUERDAS_GUITARRA,
    mudas,
    toggleMudas,
    revisarEscala,
    octavas,
    small
}: {
    notas?: NotaType[]
    mudas: boolean[]
    toggleMudas?: (posicion: number) => void
    revisarEscala?: boolean
    octavas?: number[]
    small?: boolean
}) {
    const { escala } = useGlobalState()

    let notas_escala: NotaType[] = []

    if (revisarEscala && escala.isOpen) notas_escala = armarEscala(escala.tono, escala.tipo)

    return <ul className={"flex h-full  flex-col [&>*]:basis-full " + (small ? 'text-lg' : 'lg:text-3xl')}>
        {notas.map((n, key) => <Nota
            nota={n}
            key={key}
            disabled={mudas[key]}
            toggle={toggleMudas ? () => toggleMudas(key) : undefined}
            error={revisarEscala && escala.isOpen && !notas_escala.includes(n) && !mudas[key]}
            octavo={octavas && octavas[key] ? octavas[key] : undefined}
        />)}
    </ul>
}