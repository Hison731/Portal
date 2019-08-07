import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import * as $ from 'jquery'

@IonicPage() 
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html'

})
export class EditprofilePage {
  hours: Array<{hour: number}>;
  // mins: Array<{min: number}>;
  mins: string[];

  constructor(public modalCtrl: ModalController, public navCtrl: NavController) { 
    this.hours = [];
    for (let i = 2; i <= 12; i++) {

      this.hours.push({
        hour:  i
      });
    }
    this.mins = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59'];
  }
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


