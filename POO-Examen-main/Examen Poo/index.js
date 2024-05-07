"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Planeta_1 = require("./Planeta");
var Funcionalidades = require("./Funcionalidades");
// Lógica del simulador
var nave = { salud: 100, capacidadCarga: 50, velocidad: 10 };
var planeta1 = new Planeta_1.Planeta("Planeta 1", Planeta_1.TipoRecurso.Mineral, false);
var evento1 = { nombre: "Tormenta de asteroides", afectaSalud: true, afectaCarga: false };
// Ejemplo de uso de las funcionalidades
Funcionalidades.explorar("norte");
Funcionalidades.recolectarRecursos(planeta1, 10);
Funcionalidades.manejarEvento(evento1);
