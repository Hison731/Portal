import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-weedgram',
  templateUrl: 'weedgram.html'
})
export class WeedgramPage {
  constructor(public navCtrl: NavController, private menuCtrl: MenuController) { }
  allcomment() {
    this.navCtrl.push('CommentPage', {}, {animate: false});
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
          '&nbsp;&nbsp;<a href="" class="moreless more">More</a></span></span></div><div class="truncate-text" style="display:none">' +
          h +
          '<a href="" class="moreless less">Less..</a></span></div>';

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
  // right menu2 disable
  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'menu2');
  }
}
