import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController, MenuController } from 'ionic-angular';
// import * as $ from 'jquery'

@IonicPage()
@Component({ 
  selector: 'page-cmedia',
  templateUrl: 'cmedia.html'

})
export class CmediaPage {
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, private menuCtrl: MenuController) { }
  back() {
    this.navCtrl.push('UserportalsPage', {}, {animate: false});
  }

  ionViewDidLoad() {
    // function readURL(input) {
    //   if (input.files && input.files[0]) {
    //       var reader = new FileReader();
    //       reader.onload = function(e) {
    //           $('#imagePreview').css('background-image', 'url('+e.target.result +')');
    //           $('#imagePreview').hide();
    //           $('#imagePreview').fadeIn(650);
    //       }
    //       reader.readAsDataURL(input.files[0]);
    //   }
    // }
    // $("#imageUpload").change(function() {
    //     readURL(this);
    // });
  }
  // right menu2 disable
  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'menu2');
  }
}


