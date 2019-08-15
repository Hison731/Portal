import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, MenuController} from 'ionic-angular';
// import { DataProvider } from '../../providers/data/data';
 
@IonicPage()  
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'

})
export class DashboardPage {
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, private menuCtrl: MenuController) { }
  editprofile() {
    this.navCtrl.push('DasheditprofilePage', {}, {animate: false});
  }
  // right menu2 disable
  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'menu2');
  }
}


