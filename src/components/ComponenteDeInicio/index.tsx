"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import Main from "../MainComponent";

export default function ComponenteDeInicio() {
    const [compararAcordes, setCompararAcordes] = useState(false)

    return <section className="flex flex-col gap-8">


        {compararAcordes
            ? <ComponenteDoble />
            : <Main />
        }

        <Button size={'lg'} onClick={() => setCompararAcordes(v => !v)}>
            Comparar acordes
        </Button>
    </section>
}

function ComponenteDoble() {
    return <section className="w-full flex flex-wrap gap-8 justify-center ">
        <Main />
        <Main />
    </section>
}