import { Nota, NOTAS, CUERDAS_GUITARRA } from "@/components/lib";

export default function localizarNotas(cuerdas: number[][], mudas?: boolean[]): Nota[] {
    let notas: Nota[] = []

    for (let i in cuerdas) {
        const notaActual = cuerdas[i].length ? Math.max(...cuerdas[i]) : 0
        const inicio = NOTAS.indexOf(CUERDAS_GUITARRA[i])

        if (mudas && mudas[i]) notas.push('' as Nota)
        else notas.push(NOTAS[(notaActual + inicio) % NOTAS.length])
    }

    return notas
}