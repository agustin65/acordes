import { Escalas, Nota as NotaType } from "@/components/lib";
import armarEscala from "@/functions/armarEscala";
import Nota from './Nota'

export default function Display({
    tipo,
    tono,
    notasDeAcorde
}: {
    tipo: Escalas
    tono: NotaType
    notasDeAcorde: NotaType[]
}) {
    const escala = armarEscala(tono, tipo)

    return <article className="w-full text-2xl md:text-4xl flex flex-wrap gap-2 md:gap-4 justify-center">
        {escala.map((nota, key) => <Nota
            key={key}
            nota={nota}
            marcar={notasDeAcorde.includes(nota)}
        />)}

    </article>
}