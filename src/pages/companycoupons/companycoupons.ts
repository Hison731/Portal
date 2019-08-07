import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';

@IonicPage() 
@Component({
  selector: 'page-companycoupons',
  templateUrl: 'companycoupons.html'

})
export class CompanycouponsPage {
  constructor(public modalCtrl: ModalController, public navCtrl: NavController) { }
  back() {
    this.navCtrl.push('UserportalsPage', {}, {animate: false});
  }
}


