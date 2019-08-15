import { Component } from '@angular/core'; 
import { IonicPage, NavController, ViewController, MenuController} from 'ionic-angular';

@IonicPage() 
@Component({
  selector: 'follower-modal',
  templateUrl: 'follower-modal.html',
})
export class FollowerModalPage {
  pet: string = "followers";

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, private menuCtrl: MenuController) {
  }
  closeModal() {
    this.navCtrl.push('ProfilePage', {}, {animate: false});
  };

  // right menu2 disable
  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'menu2');
  }
}
