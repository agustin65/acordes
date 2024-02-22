import { ReactNode } from "react"

const default_classes = 'disabled:bg-[#5588e555] bg-[#0f5dee] text-white hover:bg-[#035bff] active:bg-[#0649c5] shadow-md shadow-black/20'

export default function Boton({
    action,
    children,
    disabled,
    classes = default_classes
}: {
    action?: (e: any) => void
    children: ReactNode,
    disabled?: boolean
    classes?: string
}) {
    return <button
        onClick={action}
        disabled={disabled}
        className={'grid place-content-center min-h-full rounded-lg p-2 md:p-2 transition-all disabled:!scale-75 disabled:!opacity-50 hover:scale-110 active:scale-100 ' + classes}
    >
        {children}
    </button>

}