import { OCTAVAS_GUITARRA, CUERDAS_GUITARRA, NOTAS } from "@/components/lib";

export default function calcularOctavas(cuerdas: number[][]): number[] {
    let octavas = []

    for (let i in cuerdas) {
        const notaActual = cuerdas[i].length ? Math.max(...cuerdas[i]) : 0

        const posicionNota = NOTAS.indexOf(CUERDAS_GUITARRA[i])

        const inicio = OCTAVAS_GUITARRA[+i] * 12

        let traste = inicio + notaActual + posicionNota

        octavas.push(Math.floor(traste / 12))
    }

    return octavas
}