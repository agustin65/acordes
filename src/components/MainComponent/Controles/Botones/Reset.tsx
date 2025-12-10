import Boton from "./boton"
import { FaArrowRotateRight } from "react-icons/fa6";

export default function Reset({
    action,
}: {
    action: () => void
}) {
    return <Boton
        action={action}
        classes={"text-[#222]"}
    >
        <FaArrowRotateRight />
    </Boton>
}