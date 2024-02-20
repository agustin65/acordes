import { ReactNode } from "react"
import { FaTimes, FaTrash } from "react-icons/fa";
import { TbPackageExport } from "react-icons/tb";
import { useGlobalState } from "@/components/globalState";

export default function Botones({
    id,
    close,
    data
}: {
    id: string,
    close: () => void
    data: AcordeType
}) {
    const { removeAcorde, setAcordeActual } = useGlobalState()

    const deleteHandler = () => {
        removeAcorde(id)
        close()
    }

    const selectHandler = () => {
        setAcordeActual(data)
        close()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return <header className="w-full flex justify-between items-center text-2xl gap-3">

        <RedButton action={deleteHandler}>
            <FaTrash />
        </RedButton>

        <section className="flex items-center gap-4">
            <Button action={selectHandler}>
                <TbPackageExport style={{ fontSize: '130%' }} />
            </Button>
            <Button action={close}>
                <FaTimes />
            </Button>
        </section>

    </header>
}

function Button({ children, action }: { children: ReactNode, action: () => void }) {
    return <button
        onClick={action}
        className="rounded-full h-10 w-10 grid place-content-center transition-all outline-none bg-[#b0b0b0] hover:bg-[#a0a0a0] active:bg-[#999] hover:scale-110 active:scale-100"
    >
        {children}
    </button>
}

function RedButton({ children, action }: { children: ReactNode, action: () => void }) {
    return <button
        onClick={action}
        className="rounded-full text-xl h-10 w-10 grid place-content-center text-[#eee] transition-all outline-none bg-[#eb2d2d] hover:bg-[#d81c1c] active:bg-[#b10505] hover:scale-110 active:scale-100"
    >
        {children}
    </button>
}