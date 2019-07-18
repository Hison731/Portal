import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
declare var google: any;

/**
 * Generated class for the PortaldetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-portaldetail',
  templateUrl: 'portaldetail.html',
})
export class PortaldetailPage {

  portalsProfileData:any = [];
  portalsPostsData:any = [];
  openStatus:any = '';
  map:any;
  portalLat:any;
  portalLong:any;
  markerIconurl:any;
  storeName:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public dataProvider: DataProvider) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad PortaldetailPage');
    this.dataProvider.showLoading();
    let portalId = this.navParams.get("portalId");

    this.dataProvider.getPortalProfile({"portalId": portalId}).then((portalProfile) => {
      this.dataProvider.hideLoading();
      this.portalsProfileData = portalProfile.portalData;
      this.portalsPostsData = portalProfile.portalPosts;
      this.openStatus = portalProfile.openStat;

      this.portalLat = this.portalsProfileData.latitude;
      this.portalLong = this.portalsProfileData.longitude;
      this.markerIconurl = portalProfile.storeType.icon;
      this.storeName = portalProfile.storeType.type;
      this.portalMap();
      // console.log(portalProfile);
    }).catch((err)=>{
      this.dataProvider.hideLoading();
      this.dataProvider.errorALertMessage(err);
    })
  }

  portalMap(){
    // this.markerIconurl = 'https://www.420portal.com/img/brickmortar.png';
    let latLng = new google.maps.LatLng(this.portalLat, this.portalLong);
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: latLng,
      // mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      zoomControl: false,
      streetViewControl: false,
    });
    let currentMarker = new google.maps.Marker({
      map: this.map,
      position: latLng,
      title: 'Click to zoom',
      icon : this.markerIconurl,
      draggable: true
    });
  }

}
