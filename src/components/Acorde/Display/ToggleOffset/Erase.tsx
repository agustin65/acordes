import { preventDefaults } from "@/components/BGScreen";
import Boton from "./Boton"
import { FaTimes } from "react-icons/fa";

export default function Erase({
    action
}: {
    action?: () => void
}) {

    const handler = (e: any) => {
        preventDefaults(e)
        if (action) action()
    }

    return <Boton
        action={handler}
        colores={"disabled:text-[#666] text-[#222]"}
    >
        <FaTimes style={{ fontSize: '90%' }} />
    </Boton>
}