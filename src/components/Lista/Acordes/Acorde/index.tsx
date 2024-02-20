import localizarNotas from "@/components/Acorde/localizarNotas"
import Cabezal from "./Cabezal"
import Cuerda from "./Cuerda"
import FrMarker from "./FRMarker"
import Notas from "./Notas"

export default function Acorde({
    cuerdas,
    mudas,
    nombre,
    offset,
    seleccionar
}: AcordeType & {
    seleccionar: () => void
}) {
    return <article
        onClick={seleccionar}
        className="w-full  max-w-[360px] mx-auto mb-auto rounded-md p-4 flex flex-col gap-2 hover:bg-[#cfcfcf] hover:acorde active:bg-[#aaa] [&>section>div>main]:hover:bg-[#e9e9e9] [&>section>div>main]:active:bg-[#c0c0c0] cursor-pointer transition-all"
    >
        <h1 className="text-[#222] text-2xl font-medium">{nombre}</h1>

        <section className="w-full flex gap-2 items-stretch">
            <div className="w-full flex flex-col">
                <main className="w-full flex bg-[#f9f9f9] acorde relative transition-all">
                    {offset === 1
                        ? <Cabezal />
                        : <div className="difuminar-izquierda w-1/5 absolute left-0 top-0 h-full" />
                    }

                    <section className="flex flex-col basis-full">
                        {cuerdas.map((c, key) => <Cuerda
                            key={'cuerda_' + key}
                            notas={c}
                            offset={offset}
                            cuerdaSup={cuerdas[key - 1]}
                            cuerdaInf={cuerdas[key + 1]}
                        />)}
                    </section>

                    <div className="difuminar-derecha w-1/5 absolute right-0 top-0 h-full" />
                </main>
                {offset > 1 && <FrMarker offset={offset} />}
            </div>

            <Notas
                notas={localizarNotas(cuerdas)}
                cuerdasMudas={mudas}
            />
        </section>


    </article>
}