import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController, AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
 
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
}


