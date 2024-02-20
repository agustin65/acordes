import { type Nota as NotaType } from "@/components/lib";
import Nota from "./Nota";

export default function Notas({
    notas,
    cuerdasMudas,
    toggleCuerdaMuda,
    escala,
    octavas
}: {
    notas: NotaType[]
    cuerdasMudas: boolean[]
    toggleCuerdaMuda: (posicion: number) => void
    escala?: NotaType[],
    octavas?: number[]
}) {
    return <div className="flex h-fit flex-col">
        {notas.map((n, key) => <Nota
            nota={n}
            key={key}
            disabled={cuerdasMudas[key]}
            toggle={() => toggleCuerdaMuda(key)}
            noVa={escala && !escala.includes(n) && !cuerdasMudas[key]}
            octavo={octavas && octavas[key] ? octavas[key] : undefined}
        />)}
    </div>
}