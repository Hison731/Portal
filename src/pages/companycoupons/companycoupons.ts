import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';

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


