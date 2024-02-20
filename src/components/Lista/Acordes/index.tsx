import Acorde from "./Acorde"


export default function Acordes({
    acordes,
    seleccionar
}: {
    acordes: AcordeType[],
    seleccionar: (id: string) => void
}) {

    return <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
        {acordes.length
            ? acordes.map(a => <Acorde
                key={a.nombre}
                {...a}
                seleccionar={() => seleccionar(a.nombre)}
            />)
            : <h3 className="text-[#666] text-2xl text-center col-span-4 py-20">No hay acordes para mostrar</h3>
        }
    </section>
}