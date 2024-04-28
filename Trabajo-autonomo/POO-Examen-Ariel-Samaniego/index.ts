import { Planeta, TipoRecurso } from './Funciones'; 
import { Evento, NaveEspacial } from './Funciones'; 

function imprimirInfoPlaneta(planeta: Planeta): void {
    console.log(`Planeta { nombre: '${planeta.nombre}', tipoRecurso: ${planeta.tipoRecurso}, peligro: ${planeta.peligro} }`);
}

function imprimirInfoEvento(evento: Evento): void {
    console.log(evento);
}

function imprimirInfoNave(nave: NaveEspacial): void {
    console.log(nave);
}

const planeta = new Planeta('Planeta 1', TipoRecurso.Agua, false);
const evento: Evento = {
    nombre: 'Tormenta de asteroides',
    afectaSalud: true,
    afectaCarga: false
};
const nave: NaveEspacial = {
    salud: 100,
    capacidadCarga: 50,
    velocidad: 10
};

imprimirInfoPlaneta(planeta);
imprimirInfoEvento(evento);
imprimirInfoNave(nave);
