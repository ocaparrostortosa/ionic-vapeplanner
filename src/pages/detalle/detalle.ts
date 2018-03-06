import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Liquido } from '../../modelo/liquido';

/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {
  public liquido:Liquido;
  public nombreLiquido:String;
  public nicotinaLiquido:Number;
  public baseLiquido:Number;
  public aromaLiquido:Number;
  public porcentajeLiquido:Number;
  public cantidadLiquido:Number;
  public fecha:Date;
  public tituloDetalle:String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.liquido = navParams.get("param2");
    this.nombreLiquido = this.liquido.name;
    this.nicotinaLiquido = this.liquido.nicotine;
    this.baseLiquido = this.liquido.base;
    this.aromaLiquido = this.liquido.flavour;
    this.porcentajeLiquido = this.liquido.flavourProp;
    this.cantidadLiquido = this.liquido.quantity;
    this.fecha = this.liquido.creation_date;
    this.tituloDetalle = this.liquido.name;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

}
