import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html'
})
export class CommentPage {
  constructor(public navCtrl: NavController) { }
  back() {
    this.navCtrl.push('WeedgramPage', {}, {animate: false});
  }
}
