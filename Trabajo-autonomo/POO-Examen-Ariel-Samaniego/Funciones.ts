export enum TipoRecurso {
    Agua,
    Mineral,
    Vegetal
}

export class Planeta {
    constructor(public nombre: string, public tipoRecurso: TipoRecurso, public peligro: boolean) {}
}

export interface Evento {
    nombre: string;
    afectaSalud: boolean;
    afectaCarga: boolean;
}

export interface NaveEspacial {
    salud: number;
    capacidadCarga: number;
    velocidad: number;
}
