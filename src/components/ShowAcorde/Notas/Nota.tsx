import type { Nota } from "@/components/lib"

export default function Nota({
    disabled,
    toggle,
    nota,
    error,
    octavo
}: {
    disabled: boolean,
    toggle?: () => void
    nota: Nota
    error?: boolean,
    octavo?: number
}) {
    if (toggle) return <button
        onClick={toggle}
        className={"grid place-content-center outline-none transition-all rounded-md min-w-12 md:min-w-16 border-2 border-transparent hover:border-[#4d64e66f] hover:bg-[#7da0ff47] " + (error ? 'bg-[#e87b7b]' : '')}
    >
        {!disabled ? nota + (octavo || '') : 'X'}
    </button>

    return <label
        className={"grid place-content-center rounded-md " + (error ? 'bg-[#e87b7b]' : '')}
    >
        {!disabled ? nota + (octavo || '') : 'X'}
    </label>
}