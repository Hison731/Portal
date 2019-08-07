import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
  constructor(public navCtrl: NavController) { }
  weedgram() {
    this.navCtrl.push('WeedgramPage', {}, {animate: false});
  }
}
