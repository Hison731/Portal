import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
declare var google;

@IonicPage()
@Component({
  selector: 'page-coupon-detail',
  templateUrl: 'coupon-detail.html',
})
export class CouponDetailPage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CouponDetailPage');
  }
  // right menu2 disable
  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'menu2');
  }
  

}
