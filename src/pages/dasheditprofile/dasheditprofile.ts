import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController, MenuController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import * as $ from 'jquery'

@IonicPage() 
@Component({
  selector: 'page-dasheditprofile',
  templateUrl: 'dasheditprofile.html'

})
export class DasheditprofilePage {
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, private menuCtrl: MenuController) { }
  back() {
    this.navCtrl.push('DashboardPage', {}, {animate: false});
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


