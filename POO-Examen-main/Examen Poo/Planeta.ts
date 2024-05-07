export enum TipoRecurso {
    Mineral,
    Agua,
    Oxigeno,
    Planta,
  }
  
  export class Planeta {
    constructor(public nombre: string, public tipoRecurso: TipoRecurso, public peligro: boolean) {}
  }