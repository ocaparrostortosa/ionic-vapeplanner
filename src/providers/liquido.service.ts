import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription, Subscriber } from 'rxjs/Rx';
import 'rxjs/add/observable/from';
import { Liquido } from '../modelo/liquido';
import { map } from 'rxjs/operators';
import { Page } from 'ionic-angular/navigation/nav-util';
import { ListPage } from '../pages/list/liquidList';

@Injectable()
export class LiquidoService {
  
  private liquidos:Observable<Liquido[]>;
  
  private configUrl: string = 'http://ec2-52-47-163-224.eu-west-3.compute.amazonaws.com:8080/liquids';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'user_id': '5a8404e61f4b9b397c2a8b37'
    })
  };

  constructor(public http: HttpClient) {
    console.log('LiquidoService Provider');
    this.configUrl = 'http://ec2-52-47-163-224.eu-west-3.compute.amazonaws.com:8080/liquids';
    this.liquidos = this.http.get<Liquido[]>(this.configUrl, this.httpOptions);


  }
   
  getLiquidos() : Observable<Liquido[]>{
    return this.liquidos;
  }

  addLiquido(liquido:Liquido){
    this.http.post<Liquido>(this.configUrl, liquido).subscribe();
    this.liquidos.pipe(
      map(liquidos => liquidos.filter(l=> {
        if (l._id == liquido._id) {
          return true;
        } return true;
      }
      ))
    );
  }

  deleteLiquido(liquido:Liquido) : Observable<Liquido[]>{
    console.log('Eliminando liquido ' + liquido._id);
    this.configUrl = 'http://ec2-52-47-163-224.eu-west-3.compute.amazonaws.com:8080/liquids';
    this.configUrl = this.configUrl + "/" + liquido._id;
    this.http.delete(this.configUrl, this.httpOptions).subscribe();

    return this.liquidos.pipe(
        map(liquidos => liquidos.filter(l=> {
          if (l._id == liquido._id) {
            return false;
          } return true;
        }
        ))
      );
  }

  updateLiquido(liquido:Liquido){
    console.log(liquido);
    this.configUrl = 'http://ec2-52-47-163-224.eu-west-3.compute.amazonaws.com:8080/liquids/' + liquido._id;
    this.http.put<Liquido>(this.configUrl, liquido, this.httpOptions).subscribe();
    
    return this.liquidos.pipe(
      map(liquidos => liquidos.filter(l=> {
        if (l._id == liquido._id) {
          return false;
        } return true;
      }
      ))
    );
  }

}