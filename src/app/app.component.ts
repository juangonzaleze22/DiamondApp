import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { RecargarPage } from './recargar/recargar.page';
import { HistorialPage } from './historial/historial.page';
import { ConfiguracionPage } from './configuracion/configuracion.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router : Router,
    public modalController: ModalController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async Recargar() {
    const modal = await this.modalController.create({
      component: RecargarPage
    });
    return await modal.present();
  }

  async Historial() {
    const modal = await this.modalController.create({
      component: HistorialPage
    });
    return await modal.present();
  }
  async Configuracion() {
    const modal = await this.modalController.create({
      component: ConfiguracionPage
    });
    return await modal.present();
  }
  
}
