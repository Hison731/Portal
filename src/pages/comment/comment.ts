import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html'
})
export class CommentPage {
  constructor(public navCtrl: NavController, private menuCtrl: MenuController) { }
  back() {
    this.navCtrl.push('WeedgramPage', {}, {animate: false});
  }
  // right menu2 disable
  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'menu2');
  }
}
