import store from "store";

function crearObjeto({ cuerdas, mudas, offset }: AcordeType) {
    return JSON.stringify({
        c: cuerdas,
        m: mudas.reduce((arr: number[], val, key) => {
            if (val) arr.push(key)
            return arr
        }, []),
        o: offset
    })
}

export default function guardarAcorde(acorde: AcordeType) {
    store.set(acorde.nombre, crearObjeto(acorde))
}