import type { ReactNode } from "react";

const colores_default = 'disabled:bg-[#5588e555] bg-[#0f5dee] text-white hover:bg-[#035bff] active:bg-[#0649c5] shadow-md shadow-black/20'

export default function Boton({
    action,
    children,
    colores = colores_default
}: {
    action?: (e: any) => void,
    children: ReactNode,
    colores?: string
}) {
    return <button
        onClick={action}
        disabled={!Boolean(action)}
        className={"px-2 py-2 justify-center flex rounded-md disabled:!scale-75 transition-all hover:scale-105 active:scale-100 " + colores}
    >
        {children}
    </button>
}