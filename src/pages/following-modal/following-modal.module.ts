import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FollowingModalPage } from './following-modal';

@NgModule({
  declarations: [
    FollowingModalPage,
  ],
  imports: [
    IonicPageModule.forChild(FollowingModalPage),
  ],
})
export class FollowingModalPageModule {}
