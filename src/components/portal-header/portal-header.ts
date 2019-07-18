import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {StrainsPage} from '../../pages/strains/strains';

/**
 * Generated class for the PortalHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'portal-header',
  templateUrl: 'portal-header.html'
})
export class PortalHeaderComponent {

  curIndex = 0;

  constructor(public navCtrl: NavController) {
  }

  onSelectPage(index) {

    switch (index) {
      case 0:
        this.navCtrl.push('HomePage', {}, {animate: false});
        break;
      case 1:
        //this.navCtrl.push('StrainsPage');
        break;
      case 2:
        this.navCtrl.push('StrainsPage', {}, {animate: false});
        break;
      case 3:
        this.navCtrl.push('CouponsPage', {}, {animate: false});
        break;
      case 4:
        break;
    }
  }
}
