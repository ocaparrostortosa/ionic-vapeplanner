import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/from';
import { Liquido } from '../modelo/liquido';
import { map } from 'rxjs/operators';

@Injectable()
export class LiquidoService {
  
  private liquidos:Observable<Liquido[]>;
  
  private configUrl: string = 'http://localhost:3000/liquidos';//http://ec2-52-47-163-224.eu-west-3.compute.amazonaws.com:8080/liquids

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(public http: HttpClient) {
    console.log('LiquidoService Provider');
    this.cargaLiquidos();
  }

  cargaLiquidos() {
    this.liquidos = this.http.get<Liquido[]>(this.configUrl);
  }
   
  getLiquidos() : Observable<Liquido[]>{
    return this.liquidos;
  }

  addLiquido(liquido:Liquido){
    console.log("Posted.");
    this.http.post<Liquido>(this.configUrl, liquido).subscribe(data => {console.log(data)});
  }

}