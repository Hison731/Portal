import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, MenuController} from 'ionic-angular';
// import { DataProvider } from '../../providers/data/data';
 
@IonicPage()  
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'

})
export class ProfilePage {
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, private menuCtrl: MenuController) { }
  openFollower() {
    this.navCtrl.push('FollowerModalPage', {}, {animate: false});
  }
  // right menu2 disable
  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'menu2');
  }
}


