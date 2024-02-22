import Item from "./Item"

export default function Acordes({
    acordes,
    seleccionar
}: {
    acordes: AcordeType[],
    seleccionar: (id: string) => void
}) {

    return <section className="grid gap-4 sm:px-[10vw] md:px-0 md:grid-cols-2 xl:grid-cols-3 w-full">
        {acordes.length
            ? acordes.map(a => <Item
                key={a.nombre}
                acorde={a}
                seleccionar={() => seleccionar(a.nombre)}
            />)
            : <h3 className="text-[#666] text-2xl text-center col-span-4 py-20">No hay acordes para mostrar</h3>
        }
    </section>
}