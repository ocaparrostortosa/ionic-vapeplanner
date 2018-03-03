import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LiquidoService } from '../../providers/liquido.service';
import { Liquido } from '../../modelo/liquido';

@Component({
  selector: 'page-add',
  templateUrl: 'liquidAdd.html'
})
export class AddPage {

  constructor(public navCtrl: NavController, private liquidoService:LiquidoService) {

  }

  public event = {
    month: '1990-02-20'
  }

  public postLiquid(){
    let liquido:Liquido = new Liquido();//123,"id",23,10,16,false,3,"Name",3,25,true,"",2
    liquido.name = "Nombre";
    this.liquidoService.addLiquido(liquido);
  }

}
