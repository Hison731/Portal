import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, MenuController, ModalController, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import 'rxjs/add/operator/map';

declare var google;
@IonicPage()
@Component({
  selector: 'page-dispensary',
  templateUrl: 'dispensary.html'

})
export class DispensaryPage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public menu: MenuController, public alertCtrl: AlertController, private menuCtrl: MenuController, public geolocation: Geolocation) {
    menu.enable(true);
  }
  // ionViewDidEnter() {
  //   this.menuCtrl.enable(true, 'menu2');
  // }

  ionViewDidLoad() {
    this.menuCtrl.enable(true, 'menu2');
    // google map
    this.displayGoogleMap();
    this.addMarker();
  }

  // display map function
  displayGoogleMap() {
    let latLng = new google.maps.LatLng(32.7886006, -117.0974963);
    let mapOptions = {
      center: latLng,
      disableDefaultUI: true,
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: true,
      zoomControl: true,
      scaleControl: true,
      streetViewControl: true,
      fullscreenControl: true
    }
    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
  }

  //  marker add
  addMarker() {

    var position = new google.maps.LatLng(32.7886006, -117.0974963);
    var Marker = new google.maps.Marker({
      position: position,
      icon: {
        url: "../../assets/imgs/dispensary-map.png",
      },
    });
    let content = "<h4>Information!</h4>";
    this.addInfoWindow(Marker, content);
    Marker.setMap(this.map);
  }

  // when click the mark, show the content alert
  addInfoWindow(marker, content) {

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      // infoWindow.open(this.map, marker);
      this.showDoctor()
    });

  }
  // marker content alert
  showDoctor() {
    const alert = this.alertCtrl.create({
      message: `
      <div class="content">
        <div class="avatar">
            <img src="../../assets/imgs/avatar3.png">
        </div>
        <img src="../../assets/imgs/dispensary.png" alt="" class="tip_img">
        <div class="explain">
          <h5>The Herbal Care Cent...</h5>
          <p>1301 S Western Ave,</p>
          <p>Chicago, IL 60608 60608</p>
          <h3>Closed<span>5259.9 Miles</span></h3>
        </div>
      </div>`,
      buttons: ['OK'],
      cssClass: 'showDoctorCss'
    });
    alert.present();
  }

  // go result page
  dresult() {
    this.navCtrl.push('DresultPage', {}, { animate: false });
  }

  // show side menu
  openMenu() {
    this.menu.enable(true, 'menu2');
    this.menu.enable(false, 'menu1');
    this.menu.toggle();
  }


}


