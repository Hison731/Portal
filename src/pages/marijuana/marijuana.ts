import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, AlertController, MenuController } from 'ionic-angular';
// import { DataProvider } from '../../providers/data/data';
 
@IonicPage()  
@Component({
  selector: 'page-marijuana',
  templateUrl: 'Marijuana.html'

})
export class MarijuanaPage {
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public alertCtrl: AlertController, private menuCtrl: MenuController) { }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Find Your Marijuana Coupons',
      subTitle: 'If you\'re looking for <h4>Marijuana Coupons</h4>, look no further. 420Portal has Coupons Uploaded by Marijuana Dispensaries and Deliveries.',
      buttons: ['OK'],
      cssClass: 'alertCustomCss'
    });
    alert.present();
  }
  // right menu2 disable
  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'menu2');
  }
}


