import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import { StrainsubdetailPage } from '../strainsubdetail/strainsubdetail';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the StraindetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-straindetail',
  templateUrl: 'straindetail.html',
})
export class StraindetailPage {

  categoryDetails:any = [];
  categoryStrains:any = [];
  toShowStrains:any = [];
  strainCategorySlug = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController, public dataProvider:DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StraindetailPage');
    this.strainCategorySlug = this.navParams.get("slug");

    this.dataProvider.showLoading();

    this.dataProvider.getStrainCategoryData({"categorySlug": this.strainCategorySlug}).then((strainCategoryDetail:any) => {
      this.dataProvider.hideLoading();
      this.categoryDetails = strainCategoryDetail.categoryData;
      this.categoryStrains = strainCategoryDetail.categoryStrains;
      this.toShowStrains = this.categoryStrains;
      // this.toShowStrains = this.categoryStrains.splice(0, 30);
    }).catch((err)=>{
      this.dataProvider.hideLoading();
      this.dataProvider.errorALertMessage(err);
    });
  }

  openSpecificStrainDetail(strainId:any, slug:any){
    this.navCtrl.push("StrainsubdetailPage",{strainKey:strainId,strainName:slug}, {animate:false})
  }
}
