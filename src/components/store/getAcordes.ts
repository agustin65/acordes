import store from "store";

function traducirObeto(val: string): {
    cuerdas: number[][],
    mudas: boolean[],
    offset: number
} | void {
    try {
        const obj = JSON.parse(val)
        if (!obj) return

        const keys = Object.keys(obj)

        if (!keys.includes('c') || !keys.includes('m') || !keys.includes('o')) return

        return {
            cuerdas: obj.c,
            mudas: new Array(6).fill(false).map((_, key) => obj.m.includes(key)),
            offset: obj.o
        }
    } catch (err: any) {
        return
    }
}

export default function getAcordes(): AcordeType[] {
    let acordes: AcordeType[] = []

    store.each((val, nombre) => {
        const datos = traducirObeto(val)
        if (datos) acordes.push({
            nombre,
            ...datos
        })
    })

    return acordes
}