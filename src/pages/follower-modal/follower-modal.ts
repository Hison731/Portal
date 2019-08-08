import { Component } from '@angular/core'; 
import { IonicPage, NavController, ViewController} from 'ionic-angular';

@IonicPage() 
@Component({
  selector: 'follower-modal',
  templateUrl: 'follower-modal.html',
})
export class FollowerModalPage {
  pet: string = "followers";

  constructor(public viewCtrl: ViewController, public navCtrl: NavController) {
  }
  closeModal() {
    this.navCtrl.push('ProfilePage', {}, {animate: false});
  };
}
