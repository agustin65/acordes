import Erase from "./Display/ToggleOffset/Erase"
import Save from "./Display/ToggleOffset/Save"

export default function Nombre({
    nombre,
    setNombre,
    save
}: {
    nombre: string,
    setNombre: (val: string) => void
    save?: () => void
}) {
    const saveHandler = (e: any) => {
        e.preventDefault()
        if (!save) return
        save()
    }

    return <form className="flex gap-4 items-center text-2xl md:text-4xl" onSubmit={saveHandler}>
        <button hidden disabled={!Boolean(save)} />
        <Erase
            action={() => setNombre('')}
        />
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
        <Save
            action={save}
        />
    </form>
}