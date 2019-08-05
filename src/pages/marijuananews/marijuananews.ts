import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, AlertController, FabContainer } from 'ionic-angular';
 
@IonicPage()  
@Component({
  selector: 'page-marijuananews',
  templateUrl: 'Marijuananews.html'

})
export class MarijuananewsPage {
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public alertCtrl: AlertController) { }
  news1(){
    this.navCtrl.push('MnewsPage', {}, {animate: false});
  }
  closeFab(fab: FabContainer){
    fab.close();
  }
}


