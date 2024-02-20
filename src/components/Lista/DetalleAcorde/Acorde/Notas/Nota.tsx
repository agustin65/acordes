import type { Nota } from "@/components/lib"

export default function Nota({
    disabled,
    nota
}: {
    disabled: boolean,
    nota: Nota
}) {
    return <li
        className="w-full h-5 md:h-8"
    >
        {!disabled ? nota : 'X'}
    </li>
}