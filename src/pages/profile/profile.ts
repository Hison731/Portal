import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController} from 'ionic-angular';
// import { DataProvider } from '../../providers/data/data';
 
@IonicPage()  
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'

})
export class ProfilePage {
  constructor(public modalCtrl: ModalController, public navCtrl: NavController) { }
  openFollower() {
    this.navCtrl.push('FollowerModalPage', {}, {animate: false});
  }
}


