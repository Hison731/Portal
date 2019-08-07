import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController, ModalController } from 'ionic-angular';
// import { DataProvider } from '../../providers/data/data';

@IonicPage() 
@Component({
  selector: 'page-dispensary',
  templateUrl: 'dispensary.html'

})
export class DispensaryPage {
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public menu: MenuController) {
    menu.enable(true);
  }
  dresult() {
    this.navCtrl.push('DresultPage', {}, {animate: false});
  }
  openMenu() {
    this.menu.enable(true, 'menu2');
    this.menu.enable(false, 'menu1');
    this.menu.toggle();
  }

}


