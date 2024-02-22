import ShowAcorde from "@/components/ShowAcorde"

export default function Acorde({
    acorde
}: {
    acorde: AcordeType
}) {
    const { nombre } = acorde

    return <div
        className="w-[320px] md:w-[460px] mx-auto mb-auto rounded-md p-4 flex flex-col gap-8  "
    >
        <h1 className="text-[#222] text-2xl md:text-4xl font-medium mr-auto">{nombre}</h1>

        <ShowAcorde
            acorde={acorde}
            smallPoints
        />
    </div>
}