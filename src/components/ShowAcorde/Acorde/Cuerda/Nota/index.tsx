

export default function Nota({
    selected,
    toggle,
    conectarSup,
    conectarInf,
    smallPoints
}: {
    selected: boolean,
    toggle?: () => void
    conectarSup: boolean,
    conectarInf: boolean
    smallPoints?: boolean
}) {
    if (toggle) return <button
        onClick={toggle}
        className="basis-full grid place-content-center z-10 border-x-2 border-neutral-600 w-full min-h-full outline-none transition-all hover:border-y-4 hover:border-[#4d64e66f] hover:bg-[#7da0ff47]"
    >
        {selected && <div className={"relative rounded-full bg-neutral-800 marca-nota " + (smallPoints ? 'w-4 h-4' : ' w-5 h-5 md:w-6 lg:w-8 md:h-6 lg:h-8')}>
            {conectarSup && <div className="bg-inherit absolute left-0 w-full h-[120%] bottom-1/2" />}
            {conectarInf && <div className="bg-inherit absolute left-0 w-full h-[120%] top-1/2" />}
        </div>}
    </button>

    return <li
        className="basis-full grid place-content-center z-10 border-x-2 border-neutral-600 w-full min-h-full"
    >
        {selected && <div className={"relative rounded-full bg-neutral-800 marca-nota " + (smallPoints ? 'w-4 h-4' : 'w-5 h-5 md:w-6 lg:w-8 md:h-6 lg:h-8')}>
            {conectarSup && <div className="bg-inherit absolute left-0 w-full h-[120%] bottom-1/2" />}
            {conectarInf && <div className="bg-inherit absolute left-0 w-full h-[120%] top-1/2" />}
        </div>}
    </li>
}