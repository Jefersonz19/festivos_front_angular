import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Festivo } from '../entidades/festivo';

@Injectable({
  providedIn: 'root'
})
export class FestivoService {

  public verificarFestivo(anio: number, mes: number, dia: number) {
    let urlT = `${this.url}/verificar/${anio}/${mes}/${dia}`;
    return this.http.get(urlT, { responseType: 'text'});
  }
  
  public obtener(anio:number): Observable<Festivo[]>{
    let urlT = `${this.url}/obtener/${anio}`;
    return this.http.get<Festivo[]>(urlT);
  }

  url: string;

   constructor( private http: HttpClient) { 
    this.url = `${environment.urlAPI}festivos`;
  }

}
