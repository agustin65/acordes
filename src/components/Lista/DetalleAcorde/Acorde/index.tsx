import localizarNotas from "@/components/Acorde/localizarNotas"
import Cabezal from "./Cabezal"
import Cuerda from "./Cuerda"
import FrMarker from "./FRMarker"
import Notas from "./Notas"
import { CUERDAS_GUITARRA } from "@/components/lib"

export default function Acorde({
    cuerdas,
    mudas,
    nombre,
    offset
}: AcordeType) {
    return <article
        className="w-[320px] md:w-[460px] mx-auto mb-auto rounded-md p-4 flex flex-col gap-8  "
    >
        <h1 className="text-[#222] text-2xl md:text-4xl font-medium mr-auto">{nombre}</h1>

        <section className="w-full flex gap-4 items-stretch">
            <Notas
                notas={CUERDAS_GUITARRA}
                cuerdasMudas={mudas}
            />

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