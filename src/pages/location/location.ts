import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
declare var google;

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})

export class LocationPage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  myInput: '';
  // checkBoxSelectedValue: boolean ;
  markerList = [];
  testCheckboxOpen;
  testCheckboxResult;
  checkedArea;
  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, public http: Http,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.displayGoogleMap();
    this.getMarkersList();
  }

  displayGoogleMap() {
    let latLng = new google.maps.LatLng(32.7886006, -117.0974963);
    let mapOptions = {
      center: latLng,
      disableDefaultUI: true,
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
  }

  getMarkersList() {
    this.http.get('assets/data/markers.json')
      .map(res => res.json())
      .subscribe(data => {
        this.markerList = data.marker;
      },
        err => console.log("error is " + err), // error
        // () => console.log('read museum data Complete ' + sortedArea)// complete
      );
  }


  showMarkers() {
    let sortedArea = this.markerList;
    if (!this.checkedArea || this.checkedArea.length == 0) {
      console.log("if")
      for (let _i = 0; _i < sortedArea.length; _i++) {
        if (_i >= 0)
          this.addMarkersToMap(sortedArea[_i]);
      }
    }
    else {
      console.log("else")

      this.checkedArea.forEach((checkedvalue) => {
        sortedArea.forEach((area) => {
          if (area['name'] == checkedvalue) {
            console.log(area)
            this.addMarkersToMap(area);
          }
        })
      })
    }
  }

  cityZipcpode(list) {
    console.log(list);
    let sortedArea = this.markerList;
    if (list.length) {
      list.forEach((searchedData) => {
        sortedArea.forEach((area) => {
          if (area['zipcode'] == searchedData['zipcode']) {
            console.log(area);
            this.addMarkersToMap(area);
          }
        });
      })
    }
  }

  addMarkersToMap(marker) {
    console.log(marker.portalImage)
    var position = new google.maps.LatLng(marker.latitude, marker.longitude);
    var Marker = new google.maps.Marker({ position: position, title: marker.name, icon: marker.portalImage });
    // let content = museumMarker.title;
    let content = "<h6 text-center>" + marker.name + "</h6> </br><h6 text-center>" + marker.address + "</h6> </br><h6 text-center>" + marker.city + "</h6>";
    this.addInfoWindow(Marker, content);
    Marker.setMap(this.map);
  }

  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      // this.hideAllInfoWindows();
      infoWindow.open(this.map, marker);
    });
  }

  // hideAllInfoWindows() {
  //   
  //   this.museumList.forEach((marker) => {
  //     console.log(marker)
  //     marker.infoWindow.close(marker);
  //   });
  // }

  showCheckbox() {
    console.log(this.checkedArea);
    let alert = this.alertCtrl.create();
    alert.setTitle('Sort by Category');
    this.markerList.forEach((checkboxlist) => {
      
      // if (this.checkedArea) {
      //   this.checkedArea.forEach((selectedCheckboxValue) => {
      //     debugger
      //     if (selectedCheckboxValue == checkboxlist['name']) {
      //       this.checkBoxSelectedValue = true
      //     }
      //     else
      //     {
      //       this.checkBoxSelectedValue = false
      //     }
      //   })
      // }
      alert.addInput({
        type: 'checkbox',
        label: checkboxlist['name'],
        value: checkboxlist['name']
      });
    })
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        this.testCheckboxOpen = false;
        this.checkedArea = data;
        this.displayGoogleMap();
        this.showMarkers();
        console.log(this.checkedArea);
      }
    });
    alert.present();
  }

  filterItems() {
    let filterResult = this.markerList;
    if (this.myInput != '') {
      let theResult = filterResult.filter((item) => {
        return item.zipcode.toLowerCase().indexOf(this.myInput.toLowerCase()) > -1
      });
      // if (theResult.length > 0) {
      //   this.displayGoogleMap();
      // }
      this.displayGoogleMap();
      this.cityZipcpode(theResult);

    }
  }
}
