import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController, AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
 
@IonicPage()  
@Component({
  selector: 'page-mnews',
  templateUrl: 'mnews.html'

})
export class MnewsPage {
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public alertCtrl: AlertController) { }
}


