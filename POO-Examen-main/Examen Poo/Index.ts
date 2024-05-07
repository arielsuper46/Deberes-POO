import { NaveEspacial } from "./NaveEspacial";
import { Planeta, TipoRecurso } from "./Planeta";
import { Evento } from "./Evento";
import * as Funcionalidades from "./Funcionalidades";

// Lógica del simulador
const nave: NaveEspacial = { salud: 100, capacidadCarga: 50, velocidad: 10 };
const planeta1 = new Planeta("Planeta 1", TipoRecurso.Mineral, false);
const evento1: Evento = { nombre: "Tormenta de asteroides", afectaSalud: true, afectaCarga: false };

// Ejemplo de uso de las funcionalidades
Funcionalidades.explorar("norte");
Funcionalidades.recolectarRecursos<number>(planeta1, 10);
Funcionalidades.manejarEvento(evento1);

console.log(planeta1);
console.log(evento1);
console.log(nave);