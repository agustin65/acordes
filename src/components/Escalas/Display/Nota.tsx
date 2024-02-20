

export default function Nota({
    nota,
    usada
}: {
    nota: string
    usada: boolean
}) {
    return <h2
        className={"w-20 text-center py-2 px-2 text-2xl md:text-3xl rounded-lg border-2 border-black/15 marca-nota transition-all "+(usada ? 'bg-[#6e83de]':'bg-[#ededed]')}
    >
        {nota}
    </h2>
}