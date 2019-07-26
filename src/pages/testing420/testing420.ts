import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController} from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
// import { SampleModalPage } from '../sample-modal/sample-modal'; 
@IonicPage()  
@Component({
  selector: 'page-testing420',
  templateUrl: 'testing420.html'

})
export class Testing420Page {
  constructor(public modalCtrl: ModalController, public navCtrl: NavController) { }
  // openModal() {
  //   let myModal = this.modalCtrl.create(SampleModalPage);
  //   myModal.present();
  // }
}


