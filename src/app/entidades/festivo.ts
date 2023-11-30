
import { Tipo } from "./tipo";

export class Festivo {

    public id: number;
    public nombre: string;
    public dia: number;
    public mes: number;
    public diaspascua: number;
    public tipo: Tipo;
    public fecha: Date;

    constructor(
        id: number,
        nombre: string,
        dia: number,
        mes: number,
        diaspascua: number,
        tipo: Tipo,
        fecha: Date,

    ) {
        this.id = id;
        this.nombre = nombre;
        this.dia = dia;
        this.mes = mes;
        this.diaspascua = diaspascua;
        this.tipo = tipo;
        this.fecha = fecha;
    }
}