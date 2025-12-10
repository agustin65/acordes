import Screen from "@/components/BGScreen";
import { useState } from "react";
import Boton from "./Botones/boton";

export default function ResolverConflicto({
    resolver
}: {
    resolver: (reemplazar: boolean) => void
}) {
    const [prepararSalida, setPrepararSalida] = useState(false)

    const resolverHandler = (reemplazar: boolean) => {
        setPrepararSalida(true)
        setTimeout(() => resolver(reemplazar), 200)
    }

    return <Screen
        showExit={prepararSalida}
        close={() => resolverHandler(false)}
    >
        <h1>Ya hay un acorde guardado<br /> con ese nombre</h1>
        <section className="w-full flex flex-col mt-4 gap-2 [&>button]:w-full [&>button]:hover:!scale-100">
            <Boton
                classes="bg-[#909090] text-[#eee] hover:bg-[#aaa] active:bg-[#888]"
                action={() => resolverHandler(false)}
            >
                Cancelar
            </Boton>
            <Boton
                action={() => resolverHandler(true)}
            >
                Reemplazarlo
            </Boton>
        </section>
    </Screen>
}