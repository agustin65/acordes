import type { Nota } from "@/components/lib"

export default function Nota({
    disabled,
    nota
}: {
    disabled: boolean,
    nota: Nota
}) {
    return <li
        className="w-5 h-5"
    >
        {!disabled ? nota : 'X'}
    </li>
}