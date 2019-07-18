import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Events } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { AuthProvider } from '../../providers/auth/auth';
import { UrlSerializer } from 'ionic-angular/navigation/url-serializer';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {
    username: '',
    password: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public authProvider: AuthProvider, public dataProvider: DataProvider, public events: Events) {
  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      content: 'Loading...'
    });
    loading.present();
    loading.dismiss();
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.authProvider.doLogin({ "username": this.user.username, "password": this.user.password }).then((response) => {
      localStorage.setItem("userCredentials", JSON.stringify(
        {
          username: response.username,
          profileImage: response.image_id
        }));
        this.authProvider.isUserLogin = true;
      this.navCtrl.setRoot('HomePage')
    }).catch(loginError=>{
      this.dataProvider.errorALertMessage(loginError);
    })
  }

  gotosignup() {
    this.navCtrl.setRoot("SignupPage")
  }

}
