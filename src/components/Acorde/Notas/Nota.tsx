import type { Nota } from "@/components/lib"

export default function Nota({
    disabled,
    toggle,
    nota,
    noVa,
    octavo
}: {
    disabled: boolean,
    toggle?: () => void
    nota: Nota
    noVa?: boolean,
    octavo?: number
}) {
    return <button
        onClick={toggle}
        className={"w-8 h-8 grid place-content-center outline-none transition-all rounded-full hover:border-4 hover:border-[#4d64e66f] hover:bg-[#7da0ff47] " + (noVa ? 'bg-[#e87b7b]' : '')}
    >
        {!disabled ? nota + (octavo || '') : 'X'}
    </button>
}