import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { ModalController, AlertController } from '@ionic/angular';
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
    public alertController: AlertController,
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

  // account detaill

	async cuenta() {
    const alert = await this.alertController.create({
      header: 'Cuentas',
      message:'<div class="box-cuentas">'+  
            '<div class="cuentas">' +
              '<p class="title-cuenta">Beneficio</p>' +
              '<p class="price">23.00 USD</p>' +
            '</div>'+
            '<div class="cuentas">' +
              '<p class="title-cuenta">Cuenta personal</p>' +
              '<p class="price">22.00 USD</p>' +
            '</div>'+
          '</div>',
      cssClass: 'alert-style',
      buttons: [
      {
      text: 'Aceptar',
      role: 'submit',
      cssClass: 'submit'
      }
    ]
    });
  
    await alert.present();
    }
  
}
