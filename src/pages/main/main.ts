import { Component } from '@angular/core';
import { NavController, LoadingController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
  constructor(public navCtrl: NavController) { }
  editprofile() {
    this.navCtrl.push('DasheditprofilePage', {}, {animate: false});
  }
}
