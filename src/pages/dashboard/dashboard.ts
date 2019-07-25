import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController} from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
 
@IonicPage()  
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'

})
export class DashboardPage {
  constructor(public modalCtrl: ModalController, public navCtrl: NavController) { }
 
}


