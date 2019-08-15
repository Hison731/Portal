import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController} from 'ionic-angular';
// import { DataProvider } from '../../providers/data/data';

@IonicPage() 
@Component({
  selector: 'page-dresult',
  templateUrl: 'dresult.html'

})
export class DresultPage {
  constructor(public navCtrl: NavController, public menu: MenuController, private menuCtrl: MenuController) {}
  dispensary() {
    this.navCtrl.push('DispensaryPage', {}, {animate: false});
  }
  openMenu() {
    this.menu.enable(true, 'menu2');
    this.menu.enable(false, 'menu1');
    this.menu.toggle();
  }

  // right menu2 disable
  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'menu2');
  }
}

