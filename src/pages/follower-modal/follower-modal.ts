import { Component } from '@angular/core'; 
import { IonicPage, NavController, NavParams, ViewController, Platform  } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'follower-modal',
  templateUrl: 'follower-modal.html',
})
export class FollowerModalPage {
  pet: string = "followers";
  isAndroid: boolean = false;

  constructor(public viewCtrl: ViewController, platform: Platform) {
    this.isAndroid = platform.is('android');
  }
  closeModal() {
    this.viewCtrl.dismiss();
  };
}
