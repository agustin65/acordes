import Boton from "./boton"
import { TbNumber } from "react-icons/tb";
import { useGlobalState } from "@/components/globalState";

export default function Octaves() {
    const { verOctavos, toggleVerOctavos } = useGlobalState()

    return <Boton
        action={toggleVerOctavos}
        classes={'text-[#222] ' + (verOctavos ? 'bg-[#ccc]' : "")}
    >
        <TbNumber />
    </Boton>
}