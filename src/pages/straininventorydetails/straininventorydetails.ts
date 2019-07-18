import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the StraininventorydetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-straininventorydetails',
  templateUrl: 'straininventorydetails.html',
})
export class StraininventorydetailsPage {
  inventoryDetails:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController, public dataProvider:DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StraininventorydetailsPage');
    let inventoryData = this.navParams.get("inventory");
    this.inventoryDetails = inventoryData;
    console.log(inventoryData);
  }

}
