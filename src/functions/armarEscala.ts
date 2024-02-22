import { Escalas, NOTAS, Nota, SALTOS_ESCALAS } from "@/components/lib";

export default function armarEscala(tono: Nota, tipo: Escalas): Nota[] {
    const escala = SALTOS_ESCALAS[tipo]

    if (!escala) return []

    let notas: Nota[] = [tono]

    let cursor = NOTAS.indexOf(tono)

    for (let i in escala) {
        cursor += escala[i] === 't' ? 2 : 1
        notas.push(NOTAS[cursor % NOTAS.length])
    }

    return notas
}