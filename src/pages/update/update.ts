import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Liquido } from '../../modelo/liquido';
import { LiquidoService } from '../../providers/liquido.service';
import { ListPage } from '../list/liquidList';

@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {
  public liquido:Liquido;
  public nombreLiquido:String;
  public nicotinaLiquido:Number;
  public baseLiquido:Number;
  public aromaLiquido:Number;
  public porcentajeLiquido:Number;
  public cantidadLiquido:Number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private service:LiquidoService) {
    this.liquido = navParams.get("param1");
    this.nombreLiquido = this.liquido.name;
    this.nicotinaLiquido = this.liquido.nicotine;
    this.baseLiquido = this.liquido.base;
    this.aromaLiquido = this.liquido.flavour;
    this.porcentajeLiquido = this.liquido.flavourProp;
    this.cantidadLiquido = this.liquido.quantity;
  }

  updateLiquid() {
    this.liquido.name = this.nombreLiquido;
    this.liquido.nicotine = this.nicotinaLiquido;
    this.liquido.base = this.baseLiquido;
    this.liquido.flavour = this.aromaLiquido;
    this.liquido.flavourProp = this.porcentajeLiquido;
    this.liquido.quantity = this.cantidadLiquido;

    this.service.updateLiquido(this.liquido);
    this.navCtrl.push(ListPage);
  }

}
