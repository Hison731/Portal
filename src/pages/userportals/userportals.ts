import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController} from 'ionic-angular';
// import { DataProvider } from '../../providers/data/data';
 
@IonicPage()  
@Component({
  selector: 'page-userportals',
  templateUrl: 'userportals.html'

})
export class UserportalsPage {
  constructor(public modalCtrl: ModalController, public navCtrl: NavController) { }
  editprofile() {
    this.navCtrl.push('EditprofilePage', {}, {animate: false});
  }
  menu() {
    this.navCtrl.push('MenuPage', {}, {animate: false});
  }
  cmedia() {
    this.navCtrl.push('CmediaPage', {}, {animate: false});
  }
  coupons() {
    this.navCtrl.push('CompanycouponsPage', {}, {animate: false});
  }
  chatpage(){
    this.navCtrl.push('ChatPage', {}, { animate: false });
  }
}


