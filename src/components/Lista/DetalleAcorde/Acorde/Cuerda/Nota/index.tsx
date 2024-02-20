

export default function Nota({
    selected,
    conectarSup,
    conectarInf
}: {
    selected: boolean,
    conectarSup: boolean,
    conectarInf: boolean
}) {
    return <li
        className="basis-full grid place-content-center z-10 border-x-2 border-neutral-600 w-full min-h-full"
    >
        {selected && <div className="relative rounded-full w-4 h-4 bg-neutral-800 marca-nota">
            {conectarSup && <div className="bg-inherit absolute left-0 w-full h-6 bottom-1/2" />}
            {conectarInf && <div className="bg-inherit absolute left-0 w-full h-6 top-1/2" />}
        </div>}
    </li>
}