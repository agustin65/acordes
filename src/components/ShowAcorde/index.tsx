import Notas from "./Notas"
import { useGlobalState } from "../globalState"
import localizarNotas from "./functions/localizarNotas"
import calcularOctavas from "./functions/calcularOctava"
import Acorde from "./Acorde"
import FrMarker from "./FRMarker"

export default function ShowAcorde({
    acorde,
    toggleNota,
    toggleCuerdasMudas,
    smallPoints
}: {
    acorde: AcordeType,
    toggleNota?: (nota: number, cuerda: number) => void,
    toggleCuerdasMudas?: (posicion: number) => void
    smallPoints?: boolean
}) {
    const { cuerdas, mudas, offset } = acorde

    const { verOctavos } = useGlobalState()

    return <article className="w-full flex flex-col" >
        <section className="w-full flex gap-2 md:gap-4 aspect-[3/1]">
            <Notas
                mudas={mudas}
                toggleMudas={toggleCuerdasMudas}
                octavas={verOctavos ? calcularOctavas(new Array(6).fill([])) : undefined}
                small={smallPoints}
            />

            <Acorde
                acorde={acorde}
                toggleNota={toggleNota}
                smallPoints={smallPoints}
            />

            <Notas
                notas={localizarNotas(cuerdas, mudas)}
                mudas={mudas}
                toggleMudas={toggleCuerdasMudas}
                octavas={verOctavos ? calcularOctavas(cuerdas) : undefined}
                small={smallPoints}
            />
        </section>
        <FrMarker
            small={smallPoints}
            offset={offset}
        />
    </article>
}