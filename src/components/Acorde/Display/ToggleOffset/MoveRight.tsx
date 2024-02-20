import Boton from "./Boton"
import { FaArrowRight } from "react-icons/fa6";

export default function MoveRight({
    action
}: {
    action?: () => void
}) {

    return <Boton action={action}>
        <FaArrowRight />
    </Boton>
}