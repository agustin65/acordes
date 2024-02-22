import Boton from "../Botones/boton"
import { FaCheck, FaTimes } from "react-icons/fa"

export default function GuardarNombre({
    isOpen,
    nombre,
    setNombre,
    save,
    close
}: {
    isOpen: boolean
    nombre: string,
    setNombre: (val: string) => void
    save: () => void
    close: () => void
}) {
    const saveHandler = (e: any) => {
        e.preventDefault()
        if (!save) return
        save()
    }

    const closeHandler = (e: any) => {
        e.stopPropagation()
        e.preventDefault()
        close()
    }

    return <form
        style={{ maxHeight: isOpen ? '20rem' : 0 }}
        className={"transition-all flex gap-4 items-center text-2xl md:text-4xl " + (isOpen ? 'mt-8' : 'pointer-events-none opacity-0')}
        onSubmit={saveHandler}
    >
        <button hidden disabled={!Boolean(save)} />
        <Boton
            action={closeHandler}
            classes="text-[#222]"
        >
            <FaTimes />
        </Boton>

        <input
            type='text'
            placeholder="Nombre"
            required
            minLength={1}
            maxLength={15}
            value={nombre}
            onChange={e => setNombre(e.currentTarget.value)}
            className="bg-white h-full outline-none border-2 border-black/20 input-shadow rounded-xl px-3 py-1.5 max-w-sm w-full"
        />
        <Boton
            classes="text-[#222]"
        >
            <FaCheck />
        </Boton>
    </form>
}