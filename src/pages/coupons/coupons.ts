import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
// import { CouponDetailPage } from '../coupon-detail/coupon-detail';

/**
 * Generated class for the CouponsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coupons',
  templateUrl: 'coupons.html',
})
export class CouponsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      content: 'Loading...'
    });
    loading.present();
    loading.dismiss();
    console.log('ionViewDidLoad CouponsPage');
  }

  couponDetail(){
    this.navCtrl.push("CouponDetailPage", {}, {animate:false})
  }

}
