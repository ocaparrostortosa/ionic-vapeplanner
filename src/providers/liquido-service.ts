import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/from';
import { Liquido } from '../modelo/liquido';

@Injectable()
export class LiquidoService {
  
  private liquidos:Observable<Liquido[]>;
  
  constructor(public http: HttpClient) {
    this.cargaLiquidos();
  }

  cargaLiquidos() {
    this.liquidos = this.http.get<Liquido[]>('http://ec2-52-47-163-224.eu-west-3.compute.amazonaws.com:8080/liquids');
  }
   
  getLiquidos() : Observable<Liquido[]>{
    return this.liquidos;
    /**return this.liquidos.pipe(
      map(liquidos => liquidos.sort((a,b) => {return a.name<b.description ? -1:1;}))
    ); */
  }
  /**
  getFiltroMuseos(busqueda:string) : Observable<Liquido[]>{
    console.log(busqueda);
    return this.liquidos.pipe(
      map(liquidos => liquidos.filter(m=>
        m.titulo.toLowerCase().indexOf(busqueda.toLowerCase()) > -1 ||
        m.localidad.toLowerCase().indexOf(busqueda.toLowerCase()) > -1 ||
        m.provincia.toLowerCase().indexOf(busqueda.toLowerCase()) > -1
      ))
    );
  } */
}