import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
// import { Keyboard } from '@ionic-native/keyboard/ngx';

/**
 * Generated class for the PortalFooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'portal-footer',
  templateUrl: 'portal-footer.html'

})
export class PortalFooterComponent{

  curIndex = 0;
  show_footer = true;

  constructor(
    public navCtrl: NavController
  ) { }

  // keyboardCheck() {
  //   console.log('The keyboard is open:', this.keyboard.isOpen());
  // }
  onSelectPage(index) {

    switch (index) {
      case 0:
        this.navCtrl.push('HomePage', {}, { animate: false });
        break;
      case 1:
        this.navCtrl.push('ChatPage', {}, { animate: false });
        break;
      case 2:
        this.navCtrl.push('CmediaPage', {}, {animate: false});
        break;
      case 3:
        //this.navCtrl.push('CouponsPage',{},{animate:false});
        break;
      case 4:
        break;
    }
  }
}
