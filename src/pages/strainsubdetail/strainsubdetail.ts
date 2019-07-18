import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, PopoverController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-strainsubdetail',
  templateUrl: 'strainsubdetail.html',
})
export class StrainsubdetailPage {
  strainDetails:any = [];
  strainInventory:any = [];
  strainParentType:any = 'flowers';
  strainsPhotos:any = [];
  strainName = '';
  infoShow = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public dataProvider:DataProvider,
    public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    let strainKeyVal = this.navParams.get("strainKey");
    this.strainName = this.navParams.get("strainName");

    // this.dataProvider.showLoading();
    this.dataProvider.getStrainDetailsData({"strainId": strainKeyVal}).then((strainDetails:any) => {
      this.dataProvider.hideLoading();
      this.strainDetails = strainDetails.strainData;
      this.strainInventory = strainDetails.strainInventory;
      this.strainsPhotos = strainDetails.strainPics;
    }).catch((err)=>{
      this.dataProvider.hideLoading();
      this.dataProvider.errorALertMessage(err);
    })
  }

  inventoryDetails(inventoryData:any){
    this.navCtrl.push("StraininventorydetailsPage",{inventory:inventoryData}, {animate:false})
  }

  hideInfo(event) {
    event.stopPropagation();
    if (this.infoShow) this.infoShow = false;
  }

  toggleInfo(event) {
    event.stopPropagation();
    this.infoShow = !this.infoShow;
  }

  setMyStyles() {
    return {
      'height': (window.screen.width / 3) + 'px'
    };
  }
}
