import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ChatwindowPage } from '../chatwindow/chatwindow';
import { ImageViewerController } from 'ionic-img-viewer';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  _imageViewerCtrl: ImageViewerController;
  public isSearchbarOpened = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, imageViewerCtrl: ImageViewerController, private menuCtrl: MenuController) {
    this._imageViewerCtrl = imageViewerCtrl;
  }
  // right menu2 disable
  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'menu2');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
  openchat() {
    this.navCtrl.push("ChatwindowPage", {}, {animate:false})

  }
  back() {
    this.navCtrl.push('UserportalsPage', {}, {animate: false});
  }

  onInput(event) {
    console.log(event.target.value);
  }
  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
  }
}
