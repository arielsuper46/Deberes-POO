"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Planeta = exports.TipoRecurso = void 0;
var TipoRecurso;
(function (TipoRecurso) {
    TipoRecurso[TipoRecurso["Mineral"] = 0] = "Mineral";
    TipoRecurso[TipoRecurso["Agua"] = 1] = "Agua";
    TipoRecurso[TipoRecurso["Oxigeno"] = 2] = "Oxigeno";
    TipoRecurso[TipoRecurso["Planta"] = 3] = "Planta";
})(TipoRecurso || (exports.TipoRecurso = TipoRecurso = {}));
var Planeta = /** @class */ (function () {
    function Planeta(nombre, tipoRecurso, peligro) {
        this.nombre = nombre;
        this.tipoRecurso = tipoRecurso;
        this.peligro = peligro;
    }
    return Planeta;
}());
exports.Planeta = Planeta;
