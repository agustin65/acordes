import { useState } from "react"
import Screen from "@/components/BGScreen"
import Acorde from "./Acorde"
import Botones from "./Botones"

export default function DetalleAcorde({
    data,
    close
}: {
    data: AcordeType,
    close: () => void
}) {
    const [isClosing, setIsClosing] = useState(false)
    const [acorde] = useState(data)

    const closeHandler = () => {
        setIsClosing(true)
        setTimeout(() => close(), 200)
    }

    return <Screen
        showExit={isClosing}
        close={closeHandler}
    >
        <Acorde
            {...acorde}
        />
        <Botones
            id={acorde.nombre}
            close={closeHandler}
            data={acorde}
        />
    </Screen>


}