import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';

/**
 * Generated class for the SampleModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'following-modal',
  templateUrl: 'following-modal.html',
})
export class FollowingModalPage {
  constructor(public viewCtrl: ViewController) {}
  closeModal() {
    this.viewCtrl.dismiss();
  }
}
