"use client";
import { useState } from "react";
import Header from "./Header";
import Acordes from "./Acordes";

import { useGlobalState } from "../globalState";
import DetalleAcorde from "./DetalleAcorde";

const tamanio_bloque = 20

export default function ListaDeAcordes() {
    const [filtro, setFiltro] = useState('')
    const [seleccionado, setSeleccionado] = useState('')
    const [mostrar, setMostrar] = useState(tamanio_bloque)

    const { acordesGuardados } = useGlobalState()

    if (acordesGuardados.length === 0 && filtro === '') return null

    const listaDeAcordes = acordesGuardados.filter(a => a.nombre.toLowerCase().includes(filtro))

    return <>
        {seleccionado && <DetalleAcorde
            data={acordesGuardados.find(a => a.nombre === seleccionado)!}
            close={(() => setSeleccionado(''))}
        />}
        <section className="flex flex-col w-full max-w-7xl items-center gap-4 fade-in">


            <Header
                filtro={filtro}
                setFiltro={val => setFiltro(val.toLowerCase())}
            />
            <Acordes
                acordes={listaDeAcordes.slice(0, mostrar)}
                seleccionar={(id: string) => setSeleccionado(id)}
            />
            {mostrar < listaDeAcordes.length && <button
                className="px-6 py-3 text-3xl my-8 shadow-lg bg-[#909090] hover:bg-[#aaa] active:bg-[#888] shadow-black/20 rounded-xl text-[#eee] transition-all hover:scale-105 active:scale-100 "
                onClick={() => setMostrar(v => v + tamanio_bloque)}
            >
                Mostrar Mas Acordes
            </button>}
        </section>
    </>
}