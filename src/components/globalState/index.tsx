"use client";
import { useState, createContext, type ReactNode, useContext, Dispatch, SetStateAction, useEffect } from "react";
import { ESCALAS, Escalas, NOTAS, Nota, CUERDAS_GUITARRA } from "../lib";
import getAcordes from "../store/getAcordes";
import guardarAcorde from "../store/guardarAcorde";
import removeFromStore from "../store/removeAcorde";

export type EscalaContext = {
    isOpen: boolean,
    tono: Nota,
    tipo: Escalas
}

export type ContextType = {
    escala: EscalaContext,
    acordeActual: AcordeType,
    acordesGuardados: AcordeType[],
    verOctavos: boolean,
    toggleVerOctavos: () => void,
    setEscala: Dispatch<SetStateAction<EscalaContext>>,
    setAcordeActual: Dispatch<SetStateAction<AcordeType>>,
    setAcordesGuardados: Dispatch<SetStateAction<AcordeType[]>>
    saveAcorde: (data: AcordeType) => void
    removeAcorde: (id: string) => void
}

const cuerdasVacias = new Array(CUERDAS_GUITARRA.length).fill([])

const cuerdasMudasInicial = new Array(CUERDAS_GUITARRA.length).fill(false)

const escalaInicial = {
    isOpen: false,
    tono: NOTAS[0],
    tipo: ESCALAS[0]
}

export const acordeInicial = {
    cuerdas: cuerdasVacias,
    mudas: cuerdasMudasInicial,
    nombre: '',
    offset: 1
}

const initialContext: ContextType = {
    escala: escalaInicial,
    acordeActual: acordeInicial,
    acordesGuardados: [],
    verOctavos: false,
    toggleVerOctavos: () => { },
    setEscala: () => { },
    setAcordeActual: () => { },
    setAcordesGuardados: () => { },
    saveAcorde: () => { },
    removeAcorde: (id: string) => { }
}

export const GlobalState = createContext(initialContext)

export function useGlobalState() {
    const gs = useContext(GlobalState)

    return gs
}


export default function GlobalStateProvider({ children }: { children: ReactNode }) {
    const [escala, setEscala] = useState<EscalaContext>(escalaInicial)
    const [acordeActual, setAcordeActual] = useState(acordeInicial)
    const [acordesGuardados, setAcordesGuardados] = useState<AcordeType[]>([])
    const [verOctavos, setVerOctavos] = useState(false)

    useEffect(() => {
        const acordes = getAcordes()
        setAcordesGuardados(acordes)
    }, [])

    const saveAcorde = (data: AcordeType) => {
        guardarAcorde(data)
        setAcordesGuardados(arr => [...arr.filter(a => a.nombre !== data.nombre), data])
    }

    const removeAcorde = (id: string) => {
        removeFromStore(id)
        setAcordesGuardados(arr => arr.filter(a => a.nombre !== id))
    }

    return <GlobalState.Provider
        value={{
            escala,
            setEscala,
            acordeActual,
            setAcordeActual,
            acordesGuardados,
            setAcordesGuardados,
            saveAcorde,
            removeAcorde,
            verOctavos,
            toggleVerOctavos: () => setVerOctavos(v => !v)
        }}
    >
        {children}
    </GlobalState.Provider>
}