import ShowAcorde from "@/components/ShowAcorde";


export default function Item({
    acorde,
    seleccionar
}: {
    acorde: AcordeType,
    seleccionar: () => void
}) {
    const { nombre } = acorde

    return <section
        onClick={seleccionar}
        className="w-full mx-auto mb-auto rounded-md p-4 flex flex-col gap-2 hover:bg-[#cfcfcf] hover:acorde active:bg-[#aaa] [&>section>div>main]:hover:bg-[#e9e9e9] [&>section>div>main]:active:bg-[#c0c0c0] cursor-pointer transition-all"
    >
        <h1 className="text-[#222] text-2xl font-medium">{nombre}</h1>
        <ShowAcorde
            acorde={acorde}
            smallPoints
        />
    </section>
}