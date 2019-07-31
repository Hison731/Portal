import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController} from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
 
@IonicPage()  
@Component({
  selector: 'page-marijuana',
  templateUrl: 'Marijuana.html'

})
export class MarijuanaPage {
  constructor(public modalCtrl: ModalController, public navCtrl: NavController) { }
  back() {
    this.navCtrl.push('UserportalsPage', {}, {animate: false});
  }
}


