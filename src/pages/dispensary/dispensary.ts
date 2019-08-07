import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController, ModalController, AlertController } from 'ionic-angular';
// import { DataProvider } from '../../providers/data/data';

@IonicPage() 
@Component({
  selector: 'page-dispensary',
  templateUrl: 'dispensary.html'

})
export class DispensaryPage {
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public menu: MenuController, public alertCtrl: AlertController) {
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
  showDoctor() {
    const alert = this.alertCtrl.create({
      message: `
      <div class="content">
        <div class="avatar">
            <img src="../../assets/imgs/avatar3.png">
        </div>
        <img src="../../assets/imgs/dispensary.png" alt="" class="tip_img">
        <div class="explain">
          <h5>The Herbal Care Cent...</h5>
          <p>1301 S Western Ave,</p>
          <p>Chicago, IL 60608 60608</p>
          <h3>Closed<span>5259.9miles</span></h3>
        </div>
      </div>`,
      buttons: ['OK'],
      cssClass: 'showDoctorCss'
    });
    alert.present();
  }

}


