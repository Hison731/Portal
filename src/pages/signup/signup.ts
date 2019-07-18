import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  private captchaPassed: boolean = false;
  private captchaResponse: string;
  user = {
    username: '',
    email: '',
    password: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private zone: NgZone, public loadingCtrl: LoadingController,
    public authProvider: AuthProvider) {
  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      content: 'Loading...'
    });
    loading.present();
    loading.dismiss();
    console.log('ionViewDidLoad SignupPage');
  }

  captchaResolved(response: string): void {

    this.zone.run(() => {
      this.captchaPassed = true;
      this.captchaResponse = response;
    });

  }

  // dosignup() {
  //   this.authProvider.doSignup(this.user).then((response) => {

  //   })
  // }

}
