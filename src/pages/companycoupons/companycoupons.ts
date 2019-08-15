import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, MenuController } from 'ionic-angular';

@IonicPage() 
@Component({
  selector: 'page-companycoupons',
  templateUrl: 'companycoupons.html'

})
export class CompanycouponsPage {
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, private menuCtrl: MenuController) { }
  back() {
    this.navCtrl.push('UserportalsPage', {}, {animate: false});
  }

  // right menu2 disable
  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'menu2');
  }
}


