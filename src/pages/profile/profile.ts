import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';



@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  images = [
    ('assets/imgs/nature2jpg.jpg'), ('/assets/imgs/nature.jpg'), ('/assets/imgs/stones.jpg'),
    ('/assets/imgs/leaves.jpg'), ('assets/imgs/manu.jpg'), ('/assets/imgs/plants.jpg'),
    ('/assets/imgs/plants2.jpg'), ('/assets/imgs/stones2.jpg'), ('/assets/imgs/water.jpg'),
    ('/assets/imgs/water2.jpg'), ('assets/imgs/water3.jpg'), ('/assets/imgs/nature2jpg.jpg'),
    ('assets/imgs/nature2jpg.jpg'), ('/assets/imgs/nature.jpg'), ('/assets/imgs/stones.jpg'),
    ('/assets/imgs/leaves.jpg'), ('assets/imgs/manu.jpg'), ('/assets/imgs/plants.jpg'),
    ('/assets/imgs/plants2.jpg'), ('/assets/imgs/stones2.jpg'), ('/assets/imgs/water.jpg'),
    ('/assets/imgs/water2.jpg'), ('assets/imgs/water3.jpg'), ('/assets/imgs/nature2jpg.jpg'),
  ]

  userData:any = [];
  userPostLength:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public dataProvider: DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.dataProvider.showLoading();
    let username = this.navParams.get("userName");
    if(username==undefined || username=='undefined')
      {
        let userDetails = JSON.parse(localStorage.getItem("userCredentials"));
        username = userDetails.username;
      }
    // console.log(username);
    this.dataProvider.getUserProfileDetails({"username": username}).then((userDetail) => {
      this.dataProvider.hideLoading();
      this.userData = userDetail;
      this.userPostLength = userDetail.userAllPosts.length;
    }).catch((err)=>{
      this.dataProvider.hideLoading();
      this.dataProvider.errorALertMessage(err);
    })
  }

}
