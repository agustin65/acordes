

export default function Nota({
    selected,
    toggle,
    conectarSup,
    conectarInf
}: {
    selected: boolean,
    toggle: () => void
    conectarSup: boolean,
    conectarInf: boolean
}) {
    return <button
        onClick={toggle}
        className="basis-full grid place-content-center z-10 border-x-2 border-neutral-600 w-full min-h-full outline-none transition-all hover:border-y-4 hover:border-[#4d64e66f] hover:bg-[#7da0ff47]"
    >
        {selected && <div className="relative rounded-full w-5 h-5 bg-neutral-800 marca-nota">
            {conectarSup && <div className="bg-inherit absolute left-0 w-full h-8 bottom-1/2" />}
            {conectarInf && <div className="bg-inherit absolute left-0 w-full h-8 top-1/2" />}
        </div>}
    </button>
}