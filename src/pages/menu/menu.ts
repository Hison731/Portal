import { Component} from '@angular/core';
import { IonicPage, NavController, ViewController, AlertController, FabContainer, MenuController } from 'ionic-angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { text } from '@angular/core/src/render3/instructions';

class Port {
  public id: number;
  public name: string;
}
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'Menu.html'

})
export class MenuPage{
  ports: Port[];
  port: Port;
  pet: string = "addmenu";

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public alertCtrl: AlertController, private menuCtrl: MenuController) {
    this.ports = [
      { id: 1, name: 'NOT LISTED BELOW' },
      { id: 2, name: '$100 OG' },
      { id: 3, name: 'A-10' },
      { id: 4, name: 'A-Train' },
      { id: 5, name: 'Abusive OG Kush' },
      { id: 6, name: 'Acapulco Gold' },
      { id: 7, name: 'Ace of Spades' }
    ];
  }
  back_menu() {
    this.navCtrl.push('WeedgramPage', {}, {animate: false});
  }


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
  // right menu2 disable
  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'menu2');
  }
}
