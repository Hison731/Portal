import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, MenuController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the ImagedetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-imagedetails',
  templateUrl: 'imagedetails.html',
})
export class ImagedetailsPage {
  imageData:any = [];
  imageMiscData:any = {};
  showModal:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public dataProvider:DataProvider, private menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagedetailsPage');
    let imageId = this.navParams.get("image_id");
    console.log(imageId);
    this.dataProvider.showLoading();

    this.dataProvider.getImagePageDetails({"imageId": imageId}).then((imageDetailsData:any) => {
      this.dataProvider.hideLoading();
      console.log('in ts file');
      console.log(imageDetailsData);
      console.log(imageDetailsData.imageDetails.miscellaneous)
      this.imageData = imageDetailsData.imageDetails;
      this.imageMiscData = imageDetailsData.imageDetails.miscellaneous;
      console.log(this.imageMiscData)
    }).catch((err)=>{
      this.dataProvider.hideLoading();
      this.dataProvider.errorALertMessage(err);
    })
  }

  hideUserImageModal(event: any) {
    if (event.target.className == "custom-modal-container") {
      this.showModal = false;
    }
  }

  // right menu2 disable
  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'menu2');
  }
}
