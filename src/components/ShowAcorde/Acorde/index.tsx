import Cabezal from "./Cabezal";
import Cuerda from "./Cuerda";
import FrMarker from "../FRMarker";

export default function Acorde({
    acorde,
    toggleNota,
    smallPoints
}: {
    acorde: AcordeType
    toggleNota?: (nota: number, cuerda: number) => void,
    smallPoints?: boolean
}) {
    const { offset, cuerdas, } = acorde

    const cabezalVisible = offset === 1

    return <section className="w-full flex flex-col h-full items-center">
        <div className="relative flex w-full h-full acorde bg-[#f9f9f9]">
            <Cabezal visible={cabezalVisible} />

            {!cabezalVisible && <div className="difuminar-izquierda w-1/5 absolute left-0 top-0 h-full" />}

            <section className="flex flex-col basis-full">
                {cuerdas.map((c, key) => <Cuerda
                    key={'cuerda_' + key}
                    notas={c}
                    offset={offset}
                    toggleNota={toggleNota ? nota => toggleNota(nota, key) : undefined}
                    cuerdaSup={cuerdas[key - 1]}
                    cuerdaInf={cuerdas[key + 1]}
                    smallPoints={smallPoints}
                />)}
            </section>
            <div className="difuminar-derecha w-1/5 absolute right-0 top-0 h-full" />
        </div>
    </section>
}