import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import * as $ from 'jquery'

@IonicPage() 
@Component({
  selector: 'page-dresult',
  templateUrl: 'dresult.html'

})
export class DresultPage {
  constructor(public modalCtrl: ModalController, public navCtrl: NavController) {}
  dispensary() {
    this.navCtrl.push('DispensaryPage', {}, {animate: false});
  }
}

