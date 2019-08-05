import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController} from 'ionic-angular';
import * as $ from 'jquery'
@IonicPage()  
@Component({
  selector: 'page-companyprofile',
  templateUrl: 'companyprofile.html'

})
export class CompanyprofilePage {
  constructor(public modalCtrl: ModalController, public navCtrl: NavController) { 
  }
  ionViewDidLoad() {
    var showChar = 120;
    var ellipsestext = "...";

    $(".truncate").each(function() {
      var content = $(this).html();
      if (content.length > showChar) {
        var c = content.substr(0, showChar);
        var h = content;
        var html =
          '<div class="truncate-text" style="display:block">' +
          c +
          '<span class="moreellipses">' +
          ellipsestext +
          '&nbsp;&nbsp;<a href="" class="moreless more">Read More..</a></span></span></div><div class="truncate-text" style="display:none">' +
          h +
          '<a href="" class="moreless less">Read Less..</a></span></div>';

        $(this).html(html);
      }
    });

    $(".moreless").click(function() {
      var thisEl = $(this);
      var cT = thisEl.closest(".truncate-text");
      var tX = ".truncate-text";

      if (thisEl.hasClass("less")) {
        cT.prev(tX).toggle();
        // cT.slideToggle();
        cT.toggle();
      } else {
        cT.toggle();
        cT.next(tX).fadeToggle();
      }
      return false;
    });
  }
  // openModal() {
  //   let myModal = this.modalCtrl.create(SampleModalPage);
  //   myModal.present();
  // }
}

