import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/from';
import { Liquido } from '../modelo/liquido';

@Injectable()
export class LiquidoService {
  
  private liquidos:Observable<Liquido[]>;
  
  private configUrl = 'http://ec2-52-47-163-224.eu-west-3.compute.amazonaws.com:8080/liquids';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(public http: HttpClient) {
    this.cargaLiquidos();
  }

  cargaLiquidos() {
    this.liquidos = this.http.get<Liquido[]>(this.configUrl);
  }
   
  getLiquidos() : Observable<Liquido[]>{
    return this.liquidos;
    /**
    return this.liquidos.pipe(
      map(liquidos => liquidos.sort((a,b) => {return a.name<b.description ? -1:1;}))
    );*/
  }

  addLiquido(liquido:Liquido):Observable<Liquido>{
    return this.http.post<Liquido>(this.configUrl, liquido, this.httpOptions);
  }

}