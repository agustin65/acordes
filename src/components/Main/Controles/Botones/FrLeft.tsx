import { FaArrowLeft } from "react-icons/fa";
import Boton from "./boton";

export default function FRLeft({ action }: { action?: () => void }) {
    return <Boton
        disabled={!Boolean(action)}
        action={action}
    >
        <FaArrowLeft />
    </Boton>
}