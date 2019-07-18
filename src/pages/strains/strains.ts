import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';


@IonicPage()
@Component({
  selector: 'page-strains',
  templateUrl: 'strains.html',
})
export class StrainsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController, public dataProvider:DataProvider) {
  }

  ionViewDidLoad() {

  }

  getCategoryDetail(strainSlug:any){
    this.navCtrl.push("StraindetailPage",{slug:strainSlug}, {animate:false})
  }

}
