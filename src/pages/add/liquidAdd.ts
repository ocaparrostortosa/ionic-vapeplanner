import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LiquidoService } from '../../providers/liquido.service';
import { Liquido } from '../../modelo/liquido';
import { ListPage } from '../list/liquidList';

@Component({
  selector: 'page-add',
  templateUrl: 'liquidAdd.html'
})
export class AddPage {

  public nombreLiquido:string;
  public nicotinaLiquido:number;
  public baseLiquido:number;
  public aromaLiquido:number;
  public porcentajeLiquido:number;
  public cantidadLiquido:number;
  public fecha:Date;
  /*
  public date = new Date();
  public day;
  public month;
  public event;*/

  constructor(public navCtrl: NavController, private liquidoService:LiquidoService) {
    /**this.event = this.date.getFullYear()+"-"+this.date.getUTCMonth()+"-"+this.date.getDate();*/
  }  

  public postLiquid(){
    let liquido:Liquido = new Liquido();//123,"id",23,10,16,false,3,"Name",3,25,true,"",2
    liquido.name = this.nombreLiquido;
    liquido.nicotine = this.nicotinaLiquido;
    liquido.base = this.baseLiquido;
    liquido.flavour = this.aromaLiquido;
    liquido.flavourProp = this.porcentajeLiquido;
    liquido.quantity = this.cantidadLiquido;
    liquido.creation_date = this.fecha;

    let dateMilis:Date = new Date();
    let milis:Number = dateMilis.getMilliseconds();

    liquido._id = milis;
    liquido.user_id = '5a8404e61f4b9b397c2a8b37';
    liquido.description = '';
    liquido.maceration = 3;
    liquido.state = true;
    liquido.favourite = false;

    this.liquidoService.addLiquido(liquido);
    this.navCtrl.setRoot(ListPage);        
  }

}
