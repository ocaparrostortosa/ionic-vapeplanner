import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-add',
  templateUrl: 'liquidAdd.html'
})
export class AddPage {

  constructor(public navCtrl: NavController) {

  }

  public event = {
    month: '1990-02-20'
  }

}
