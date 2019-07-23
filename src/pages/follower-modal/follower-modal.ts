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
  selector: 'follower-modal',
  templateUrl: 'follower-modal.html',
})
export class FollowerModalPage {
  constructor(public viewCtrl: ViewController) {}
  closeModal() {
    this.viewCtrl.dismiss();
  }
}
