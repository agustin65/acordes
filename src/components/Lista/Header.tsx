
export default function Header({
    filtro,
    setFiltro
}: {
    filtro: string,
    setFiltro: (val: string) => void
}) {
    return <header className="text-3xl md:text-4xl w-full px-[5vw] lg:px-0 flex gap-8 flex-col md:flex-row justify-center md:justify-between items-center">
        <h1 className="text-[#555] font-medium text-4xl md:text-6xl" >Mi Biblioteca:</h1>

        <input
            type='text'
            maxLength={15}
            value={filtro}
            placeholder="Buscar..."
            onChange={e => setFiltro(e.currentTarget.value)}
            className="bg-white h-full max-w-sm outline-none border-2 border-black/20 input-shadow rounded-xl px-4 py-2 w-full"
        />
    </header>
}