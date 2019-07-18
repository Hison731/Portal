import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, imageViewerCtrl: ImageViewerController) {
    this._imageViewerCtrl = imageViewerCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
  openchat() {
    this.navCtrl.push("ChatwindowPage", {}, {animate:false})

  }

  onInput(event) {
    console.log(event.target.value);
  }
  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
  }
}
