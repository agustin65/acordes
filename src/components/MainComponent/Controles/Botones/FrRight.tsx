import { FaArrowRight } from "react-icons/fa";
import Boton from "./boton";

export default function FRRight({ action }: { action?: () => void }) {
    return <Boton
        disabled={!Boolean(action)}
        action={action}
    >
        <FaArrowRight />
    </Boton>
}