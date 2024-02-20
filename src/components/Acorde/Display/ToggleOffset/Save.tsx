import Boton from "./Boton"
import { FaSave } from "react-icons/fa";

export default function Save({
    action
}: {
    action?: () => void
}) {

    return <Boton
        action={action}
        colores={"disabled:text-[#666] text-[#222]"}
    >
        <FaSave style={{ fontSize: '90%' }} />
    </Boton>
}