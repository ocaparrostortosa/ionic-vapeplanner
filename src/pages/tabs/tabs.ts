import { Component } from '@angular/core';
import { AddPage } from '../add/liquidAdd';
import { ListPage } from '../list/liquidList';
import { UpdatePage } from '../update/update';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = ListPage;
  tab2Root = AddPage;
  tab3Root = UpdatePage;
  constructor() {
  }
}