import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Liquido } from '../../modelo/liquido';
import { Observable } from 'rxjs/Observable';
import { LiquidoService } from '../../providers/liquido.service';

@Component({
  selector: 'page-list',
  templateUrl: 'liquidList.html'
})
export class ListPage {
  liquidos:Observable<Liquido[]>;

  constructor(public navCtrl: NavController, private liquidoService:LiquidoService) {
    this.liquidos = this.liquidoService.getLiquidos();
  }

  public actualizarLiquido(liquido:Liquido){
    console.log("Actualizando liquido con id: " + liquido.id);
    //this.liquidoService.updateLiquido();
  }

  public eliminarLiquido(liquido:Liquido){
    console.log("Eliminando liquido con id: " + liquido.id);
    this.liquidos = this.liquidoService.deleteLiquido(liquido);
    
  }

}
