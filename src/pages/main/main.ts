import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
  constructor(public navCtrl: NavController, private menuCtrl: MenuController, public alertCtrl: AlertController) { }
  weedgram() {
    this.navCtrl.push('WeedgramPage', {}, { animate: false });
  }
  // right menu2 disable
  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'menu2');
  }
  // show popup
  showWeedgram() {
    setTimeout(() => {
      const alert = this.alertCtrl.create({
        message: `
      <div class="content">
        <div class="title_bar">
          <img src="../../assets/imgs/main_avatar.png" alt="">
          <p>420Portal</p>
        </div>
        <img src="../../assets/imgs/weedgram/1.jpg" alt="" style="width: 100%;">
        <div class="bottome_bar">
          <img src="../../assets/imgs/icon-heart2.png" alt="">
          <img src="../../assets/imgs/icon-account1.png" alt="">
          <img src="../../assets/imgs/icon-send.png" alt="">
          <img src="../../assets/imgs/icon-dot.png" alt="">
        </div>
      </div>`,
        cssClass: 'showWeedgramCss'
      });
      alert.present();
    }, 500);
  }
  //touch close
  closePopup(){
    $('ion-alert').css('display', 'none');
  }

  // tooltip
  // tooltipEvent: 'click' | 'press' = 'click';
  tooltipEvent: 'hover';
  showArrow: boolean = false;
  duration: number = 3000;

}
