import type { Nota as NotaType } from "@/components/lib";
import Nota from "./Nota";

export default function Notas({
    notas,
    cuerdasMudas
}: {
    notas: NotaType[]
    cuerdasMudas: boolean[]
}) {
    return <ul className="flex h-fit flex-col text-base md:text-xl text-left">
        {notas.map((n, key) => <Nota
            nota={n}
            key={key}
            disabled={cuerdasMudas[key]}
        />)}
    </ul>
}