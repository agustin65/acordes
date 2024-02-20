import Boton from "./Boton"
import { TbNumber } from "react-icons/tb";
import { useGlobalState } from "@/components/globalState";

export default function VerOctavos() {
    const { verOctavos, toggleVerOctavos } = useGlobalState()

    return <Boton
        action={toggleVerOctavos}
        colores={'text-[#222] ' + (verOctavos ? 'bg-[#bbb]' : "")}
    >
        <TbNumber />
    </Boton>
}