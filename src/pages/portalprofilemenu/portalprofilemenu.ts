import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the PortalprofilemenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-portalprofilemenu',
  templateUrl: 'portalprofilemenu.html',
})
export class PortalprofilemenuPage {
  allStrainCategories:any = [];
  allStrainList:any = [];

  clickedStrainPic:any = '';
  formData:any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public dataProvider: DataProvider, public camera: Camera) {
  }

  ionViewDidLoad() {
    this.dataProvider.showLoading();
    let portalKey = this.navParams.get("portalId");

    this.dataProvider.getPortalProfileMenu({"portalId": portalKey}).then((portalMenuData) => {
      this.dataProvider.hideLoading();
      // console.log('2nd Data'+specificPortalDetail);
      this.allStrainCategories = portalMenuData.strainCats;
      this.allStrainList = portalMenuData.strainList;
      console.log(this.allStrainCategories);
      console.log(this.allStrainList);
    }).catch((err)=>{
      this.dataProvider.hideLoading();
      this.dataProvider.errorALertMessage(err);
    })
    console.log('ionViewDidLoad PortalprofilemenuPage');
  }

  openGallery(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      this.clickedStrainPic = 'data:image/jpeg;base64,' + imageData;
      console.log(this.clickedStrainPic)
     }, (err) => {
      console.log(err);
     });  
  }

  saveAddMenuData(){
    this.dataProvider.dataURLtoFile(this.clickedStrainPic).then((file) => {
      
    });
     
  }

}
