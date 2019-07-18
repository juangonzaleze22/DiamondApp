import { Component, OnInit } from '@angular/core';
import { NavController,ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recargar',
  templateUrl: './recargar.page.html',
  styleUrls: ['./recargar.page.scss'],
})
export class RecargarPage implements OnInit {

  constructor(private nav:NavController,private modalCtrl:ModalController) { }

  ngOnInit() {
  }

    
  closeModal()
  {
    this.modalCtrl.dismiss();
  }

}
