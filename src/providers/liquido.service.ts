import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription, Subscriber } from 'rxjs/Rx';
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
    this.configUrl = 'http://localhost:3000/liquidos';
    this.liquidos = this.http.get<Liquido[]>(this.configUrl);
  }
   
  getLiquidos() : Observable<Liquido[]>{
    return this.liquidos;
  }

  addLiquido(liquido:Liquido){
    this.http.post<Liquido>(this.configUrl, liquido).subscribe(data => {console.log(data)});
    this.liquidos.pipe(
      map(liquidos => liquidos.filter(l=> {
        if (l.id == liquido.id) {
          return true;
        } return true;
      }
      ))
    );
  }

  deleteLiquido(liquido:Liquido) : Observable<Liquido[]>{
    console.log('Eliminando liquido ' + liquido.id);
    this.configUrl = 'http://localhost:3000/liquidos';
    this.configUrl = this.configUrl + "/" + liquido.id;
    this.http.delete(this.configUrl, this.httpOptions).subscribe();

    return this.liquidos.pipe(
        map(liquidos => liquidos.filter(l=> {
          if (l.id == liquido.id) {
            return false;
          } return true;
        }
        ))
      );
    /*
    this.liquidos.subscribe( liquidos => {
      liquidos.forEach(element => {
        if(element.id === liquido.id){
          let index:number = liquidos.indexOf(element);
          console.log("Index " + index + ":" + liquido.id);
          if(index >= 0){
            console.log("Has entrado");
            liquidos.splice(index, 1);
          }
        }
      });      
    });*/

  }

}