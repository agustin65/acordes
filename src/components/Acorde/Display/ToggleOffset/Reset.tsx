import Boton from "./Boton"
import { FaArrowRotateRight } from "react-icons/fa6";

export default function Reset({
    action,
}: {
    action: () => void
}) {

    return <Boton
        action={action}
        colores={"text-[#222]"}
    >
        <FaArrowRotateRight />
    </Boton>
}