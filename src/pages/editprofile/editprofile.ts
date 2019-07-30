import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController} from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
 
@IonicPage()  
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html'

})
export class EditprofilePage {
  constructor(public modalCtrl: ModalController, public navCtrl: NavController) { }
 
}


