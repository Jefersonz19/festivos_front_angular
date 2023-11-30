import { Component, OnInit } from '@angular/core';
import { MatDatepickerPanel } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { Festivo } from 'src/app/entidades/festivo';
import { Tipo } from 'src/app/entidades/tipo';
import { FestivoService } from 'src/app/servicios/festivo.service';

@Component({
  selector: 'app-festivos',
  templateUrl: './festivos.component.html',
  styleUrls: ['./festivos.component.css']
})
export class FestivosComponent implements OnInit {

  public textoBusqueda: string = "";
  public festivo: Festivo[] = [];
  public tipo: Tipo[] = [];
  Datefestivo = new Date();

  public columnas = [ 
    {name: "Festivo", prop: "festivo"},
    {name: "Fecha", prop:"fecha"},
  ]

  public modoColumna = ColumnMode;
  public tipoSeleccion = SelectionType;
  public festivoSeleccionado: Festivo | undefined;

  constructor(
    private festivoService: FestivoService,
    public dialogService: MatDialog,
    ) {
  }

  ngOnInit(): void {
    this.obtener();
}

  public obtener() {
  //if (this.textoBusqueda.length > 0) { 
   // const anio = parseInt('this.textoBusqueda')

    this.festivoService.obtener(parseInt(this.textoBusqueda)).subscribe(
      respuesta => {
        this.festivo = respuesta;
      });

  }

  public verificarFestivo() {
    const anio = this.Datefestivo.getFullYear()
    const mes = this.Datefestivo.getMonth()+1
    const dia = this.Datefestivo.getDate()


    this.festivoService.verificarFestivo(anio, mes, dia).subscribe(
      respuesta => {
        window.alert(respuesta)
      });
  }

  public onActivate(event: any) {
  }
}
