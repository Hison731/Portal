import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, AlertController, FabContainer} from 'ionic-angular';
 
@IonicPage()  
@Component({
  selector: 'page-menu',
  templateUrl: 'Menu.html'

})
export class MenuPage {
  constructor(public modalCtrl: ModalController, public navCtrl: NavController,public alertCtrl: AlertController) { }
  back() {
    this.navCtrl.push('UserportalsPage', {}, {animate: false});
  }
  showImg() {
    const alert = this.alertCtrl.create({
      subTitle: '<img src="./../assets/imgs/logo1.png">',
      message: 'test',
      cssClass: 'showImgCss'
    });
    alert.present();
  }
  closeFab(fab: FabContainer){
    fab.close();
  }
}


