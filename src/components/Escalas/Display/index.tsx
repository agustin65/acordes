import { Escalas, Nota as NotaType } from "@/components/lib";
import armarEscala from "./armarEscala";
import Nota from "./Nota";

export default function Display({
    tono,
    tipo,
    notasDeAcorde
}: {
    tono: NotaType
    tipo: Escalas
    notasDeAcorde: NotaType[]
}) {

    const escala = armarEscala(tono, tipo)

    return <section className="flex flex-col gap-4 items-center w-fit">
        <article className="w-full flex flex-wrap justify-center gap-2">
            {escala.map((n, key) => <Nota
                key={key}
                nota={n}
                usada={notasDeAcorde.includes(n)}
            />)}
        </article>
    </section>
}