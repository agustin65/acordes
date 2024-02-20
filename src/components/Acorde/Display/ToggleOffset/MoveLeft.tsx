import Boton from "./Boton"
import { FaArrowLeft } from "react-icons/fa6";

export default function MoveLeft({
    action
}: {
    action?: () => void
}) {

    return <Boton action={action}>
        <FaArrowLeft />
    </Boton>
}