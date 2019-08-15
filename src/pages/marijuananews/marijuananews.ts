import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, AlertController, FabContainer, MenuController } from 'ionic-angular';
 
@IonicPage()  
@Component({
  selector: 'page-marijuananews',
  templateUrl: 'Marijuananews.html'

})
export class MarijuananewsPage {
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public alertCtrl: AlertController, private menuCtrl: MenuController) { }
  news1(){
    this.navCtrl.push('MnewsPage', {}, {animate: false});
  }
  closeFab(fab: FabContainer){
    fab.close();
  }
  // right menu2 disable
  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'menu2');
  }
}


