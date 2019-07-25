import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController} from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
 
@IonicPage()  
@Component({
  selector: 'page-userportals',
  templateUrl: 'userportals.html'

})
export class UserportalsPage {
  constructor(public modalCtrl: ModalController, public navCtrl: NavController) { }
 
}


