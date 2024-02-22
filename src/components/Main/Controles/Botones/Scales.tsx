import Boton from "./boton"
import { useGlobalState } from "@/components/globalState"

export default function Scales() {

    const { setEscala, escala } = useGlobalState()

    const toggleShowScales = () => setEscala(s => ({ ...s, isOpen: !s.isOpen }))

    return <Boton
        action={toggleShowScales}
        classes={'text-[#222] ' + (escala.isOpen ? ' bg-[#ccc]' : "")}
    >
        E°
    </Boton>
}