import type { Nota } from "@/components/lib"

export default function Nota({
    disabled,
    toggle,
    nota,
    error,
    acierto,
    octavo
}: {
    disabled: boolean,
    toggle?: () => void
    nota: Nota
    error?: boolean,
    acierto?: boolean
    octavo?: number
}) {
    if (toggle) return <button
        onClick={toggle}
        className={"grid place-content-center outline-none transition-all min-w-12 md:min-w-16 border-2 border-transparent hover:border-[#4d64e66f] hover:bg-[#7da0ff47] " + (error ? 'bg-[#e87b7b]' : '') + (acierto ? ' bg-[#74ee70]' : '')}
    >
        {!disabled ? nota + (octavo || '') : 'X'}
    </button>

    return <label
        className={"grid place-content-center " + (error ? 'bg-[#e87b7b]' : '') + (acierto ? ' bg-[#74ee70]' : '')}
    >
        {!disabled ? nota + (octavo || '') : 'X'}
    </label>
}