import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Dialogs } from '@ionic-native/dialogs';

import { MyApp } from './app.component';
import { AddPage } from '../pages/add/liquidAdd';
import { ListPage } from '../pages/list/liquidList';
import { TabsPage } from '../pages/tabs/tabs';
import { LiquidoService } from '../providers/liquido.service';
import { HttpClientModule } from '@angular/common/http';
import { UpdatePage } from '../pages/update/update';
import { DetallePage } from '../pages/detalle/detalle';

@NgModule({
  declarations: [
    MyApp,
    AddPage,
    ListPage,
    TabsPage,
    UpdatePage,
    DetallePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddPage,
    ListPage,
    TabsPage,
    UpdatePage,
    DetallePage
  ],
  providers: [
    StatusBar,
    Dialogs,
    SplashScreen,
    LiquidoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
