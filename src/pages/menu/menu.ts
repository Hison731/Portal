import { Component} from '@angular/core';
import { IonicPage, NavController, ViewController, AlertController, FabContainer } from 'ionic-angular';
// import { IonicSelectableComponent } from 'ionic-selectable';
import { text } from '@angular/core/src/render3/instructions';

// class Port {
//   public id: number;
//   public name: string;
// }
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'Menu.html'
 
})
export class MenuPage{
  // ports: Port[];
  // port: Port;
  pet: string = "addmenu";

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public alertCtrl: AlertController) {
    // this.ports = [
    //   { id: 1, name: 'Tokai' },
    //   { id: 2, name: 'Vladivostok' },
    //   { id: 3, name: 'Navlakhi' }
    // ];
  }
  // portChange(event: {
  //   component: IonicSelectableComponent,
  //   value: any 
  // }) {
  //   console.log('port:', event.value);
  // }


  categoryAlertOpts: any = {
    cssClass: 'categoryAlertCss'
  }
  strainAlertOpts: any = {
    cssClass: 'strainAlertCss'
  }
  


  back() {
    this.navCtrl.push('UserportalsPage', {}, { animate: false });
  }
  showImg() {
    const alert = this.alertCtrl.create({
      subTitle: '<img src="./../assets/imgs/logo1.png">',
      message: 'test',
      cssClass: 'showImgCss'
    });
    alert.present();
  }
  closeFab(fab: FabContainer) {
    fab.close();
  }
}


