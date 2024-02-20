
export const NOTAS = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B'
] as const

export type Nota = typeof NOTAS[number]

export const CUERDAS_GUITARRA: Nota[] = [
    'E',
    'B',
    'G',
    'D',
    'A',
    'E'
] as const

export type Cuerda = typeof CUERDAS_GUITARRA[number]

export const TRASTES_GUITARRA = 18

export const ESCALAS = ['mayor', 'menor'] as const

export type Escalas = typeof ESCALAS[number]

export type SaltosDeEscalas = {
    [tipo: string]: ('t' | 'st')[];
}

export const SALTOS_ESCALAS: SaltosDeEscalas = {
    mayor: ['t', 't', 'st', 't', 't', 't', 'st'],
    menor: ['t', 't', 'st', 't', 't', 't', 'st']
}

export const OCTAVAS_GUITARRA = [
    4,
    3,
    3,
    3,
    2,
    2
]