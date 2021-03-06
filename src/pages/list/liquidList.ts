import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Liquido } from '../../modelo/liquido';
import { Observable } from 'rxjs/Observable';
import { LiquidoService } from '../../providers/liquido.service';
import { Aroma } from '../../modelo/aroma';
import { UpdatePage } from '../update/update';
import { Dialogs } from '@ionic-native/dialogs';
import { DetallePage } from '../detalle/detalle';

@Component({
  selector: 'page-list',
  templateUrl: 'liquidList.html'
})
export class ListPage {
  liquidos:Observable<Liquido[]>;
  aromas:Aroma[] = new Array();

  constructor(public navCtrl: NavController, private liquidoService:LiquidoService, private dialogo:Dialogs) {
    this.liquidos = this.liquidoService.getLiquidos();

    this.dialogo.alert('Bienvenido a nuestra aplicación')
    .then(() => console.log('Dialog dismissed'))
    .catch(e => console.log('Error displaying dialog', e));

    if(this.aromas.length == 0) {
      let red_astaire:Aroma = new Aroma;
      red_astaire.id = 1;
      red_astaire.nombre = "Red Astaire";

      let leviathan:Aroma = new Aroma;
      leviathan.id = 2;
      leviathan.nombre = "Leviathan";

      let oni:Aroma = new Aroma;
      oni.id = 3;
      oni.nombre = "Oni";

      this.aromas.push(red_astaire);
      this.aromas.push(leviathan);
      this.aromas.push(oni);
    }
  }

  public actualizarLiquido(liquido:Liquido){
    console.log("Actualizando liquido con id: " + liquido._id);
    this.navCtrl.push(UpdatePage, {param1: liquido});
  }

  public eliminarLiquido(liquido:Liquido){
    console.log("Eliminando liquido con id: " + liquido._id);
    this.liquidos = this.liquidoService.deleteLiquido(liquido);
    
  }

  public irADetalle(liquido:Liquido) {
    this.navCtrl.push(DetallePage, {param2: liquido});
  }

}
