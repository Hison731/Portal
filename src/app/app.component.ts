import {Component, ViewChild} from '@angular/core';
import {Nav, Platform, Events} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HomePage} from '../pages/home/home';
import {AuthProvider} from '../providers/auth/auth';
import {jsonpCallbackContext} from '@angular/common/http/src/module';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = "HomePage";
  pages: Array<{ title: string, component: any }>;
  userDetails: any = [];

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public authProvider: AuthProvider) {
    this.initializeApp();
    this.pages = [
      {title: 'Home', component: "HomePage"},
      // { title: 'Map', component: LocationPage },
      {title: 'Dispensary Delivery Doctor', component: "HomePage"},
      {title: 'Chat', component: "ChatPage"},
      {title: 'Marijuana Strains', component: "StrainsPage"},
      {title: 'Coupons', component: "CouponsPage"},
      {title: 'Portals', component: "UserportalPage"},
      {title: 'Profile Settings', component: "ProfilesettingPage"}
    ];

    if (localStorage.getItem("userCredentials")) {
      this.authProvider.isUserLogin = true;

      this.userDetails = JSON.parse(localStorage.getItem("userCredentials"));
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  openUserProfile(username: any) {
    // console.log(username);
    this.nav.push("ProfilePage", {userName: username})
  }
}
