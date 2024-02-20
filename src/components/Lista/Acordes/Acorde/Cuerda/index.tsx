import { TRASTES_GUITARRA } from "@/components/lib"
import Nota from "./Nota"
import Relleno from "./Relleno"

const rango_de_notas = 5

export default function Cuerda({
    notas,
    cuerdaSup,
    cuerdaInf,
    offset
}: {
    notas: number[],
    offset: number,
    cuerdaSup?: number[]
    cuerdaInf?: number[]
}) {
    let notasAMostrar = []

    for (let i = 0; i < rango_de_notas; i++) {
        const notaActual = +i + offset

        if (notaActual > TRASTES_GUITARRA) notasAMostrar.push(<Relleno
            key={'nota_' + i}
        />)
        else notasAMostrar.push(<Nota
            key={'nota_' + i}
            selected={notas.includes(notaActual)}
            conectarInf={Boolean(cuerdaInf && cuerdaInf.includes(notaActual))}
            conectarSup={Boolean(cuerdaSup && cuerdaSup.includes(notaActual))}
        />)
    }

    return <ul className="relative w-full h-5 flex items-center justify-center">
        {notasAMostrar}
        <div className="z-0 bg-[#454545] h-1 right-0 min-w-full left-0 absolute" />
    </ul>
}