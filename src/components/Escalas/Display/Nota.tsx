import { Nota } from "@/components/lib";

export default function Nota({
    nota,
    marcar
}: {
    nota: Nota,
    marcar: boolean
}) {
    return <div className={"rounded-md md:rounded-lg basis-1/8 w-1/8 px-2 py-1 md:py-2 md:px-4 min-w-max transition-all shadow-1 " + (marcar ? 'bg-[#4b2ce8] text-white' : 'bg-[#eee]')}>
        {nota}
    </div>
}