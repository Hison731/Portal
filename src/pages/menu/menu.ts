import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, AlertController, FabContainer} from 'ionic-angular';
import { text } from '@angular/core/src/render3/instructions';
 
@IonicPage()  
@Component({
  selector: 'page-menu',
  templateUrl: 'Menu.html'

})
export class MenuPage {
  // select box_____________
    music: string;
    musicAlertOpts: { title: string, cssClass: any};
    // category: string;
    // categoryAlertOpts: { subtitle: string,cssClass: any};
  //___________


  pet: string = "addmenu";

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public alertCtrl: AlertController) {
    // this.categoryAlertOpts={
    //   subtitle:'Please Select a Category',
    //   cssClass: 'categoryAlertCss'
    // }
    
    this.musicAlertOpts = {
      title: 'Strain',
      cssClass: 'strainAlertCss',
    };
  }

  categoryAlertOpts: any = {
    subtitle:'Please Select a Category',
    cssClass: 'categoryAlertCss'
  }
  

  back() {
    this.navCtrl.push('UserportalsPage', {}, {animate: false});
  }
  showImg() {
    const alert = this.alertCtrl.create({
      subTitle: '<img src="./../assets/imgs/logo1.png">',
      message: 'test',
      cssClass: 'showImgCss'
    });
    alert.present();
  }
  closeFab(fab: FabContainer){
    fab.close();
  }
}


