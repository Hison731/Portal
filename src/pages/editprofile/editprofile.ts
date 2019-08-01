import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import * as $ from 'jquery'

@IonicPage() 
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html'

})
export class EditprofilePage {
  constructor(public modalCtrl: ModalController, public navCtrl: NavController) { }
  back() {
    this.navCtrl.push('UserportalsPage', {}, {animate: false});
  }

  ionViewDidLoad() {
    $(".radio_checkbox").click( function(){
      if( $(this).is(':checked') ) {
        $('.'+ $(this).attr('id')).prop('checked', false);
        // debugger;
        $(this).parent().siblings('.time_div').hide();
      }
      else{
        $(this).parent().siblings('.time_div').show();
      }

   });
    
    // function readURL(input) {
    //   if (input.files && input.files[0]) {
    //       var reader = new FileReader();
    //       reader.onload = function(e) {
    //           $('#imagePreview').css('background-image', 'url('+e.target.result +')');
    //           $('#imagePreview').hide();
    //           $('#imagePreview').fadeIn(650);
    //       }
    //       reader.readAsDataURL(input.files[0]);
    //   }
    // }
    // $("#imageUpload").change(function() {
    //     readURL(this);
    // });
  }
}


