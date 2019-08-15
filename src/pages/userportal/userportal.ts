import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, MenuController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the UserportalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userportal',
  templateUrl: 'userportal.html',
})
export class UserportalPage {

  portalsData:any = [];
  toDisplayPortalData:any = [];
  selectedPortal:any = '';
  // specificPortalData:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public dataProvider: DataProvider, private menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    this.dataProvider.showLoading();
    let userDetails = JSON.parse(localStorage.getItem("userCredentials"));
    let username = userDetails.username;

    this.dataProvider.getUserPortalsData({"username": username}).then((portalsDetail) => {
      this.dataProvider.hideLoading();
      this.portalsData = portalsDetail.allPortalsData;
      //this.toDisplayPortalData = portalsDetail.displayPortal;
      // console.log('1st Data'+this.toDisplayPortalData);
      this.selectedPortal = portalsDetail.allPortalsData[0].id;
    }).catch((err)=>{
      this.dataProvider.hideLoading();
      this.dataProvider.errorALertMessage(err);
    })
  }

  changeUserPortal(){
    // console.log(this.selectedPortal);
    this.dataProvider.showLoading();
    this.dataProvider.getSpecificUserPortalData({"portalId": this.selectedPortal}).then((specificPortalDetail) => {
      this.dataProvider.hideLoading();
      // console.log('2nd Data'+specificPortalDetail);
      this.toDisplayPortalData = specificPortalDetail;
    }).catch((err)=>{
      this.dataProvider.hideLoading();
      this.dataProvider.errorALertMessage(err);
    })
  }

  openPortalProfile(portalId:any){
    console.log(portalId);
    this.navCtrl.push("PortaldetailPage",{portalId: portalId}, {animate:false})
  }

  openPortalMenu(portalId:any){
    this.navCtrl.push("PortalprofilemenuPage",{portalId: portalId}, {animate:false})
  }

  // right menu2 disable
  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'menu2');
  }

}
