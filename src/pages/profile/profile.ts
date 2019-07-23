import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController} from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { FollowerModalPage } from '../follower-modal/follower-modal';

 
@IonicPage()  
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'

})
export class ProfilePage {
  constructor(public modalCtrl: ModalController) { }

  openFollower() {
    let myModal = this.modalCtrl.create(FollowerModalPage);
    myModal.present();
  }
}


