import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FollowerModalPage } from './follower-modal';

@NgModule({
  declarations: [
    FollowerModalPage,
  ],
  imports: [
    IonicPageModule.forChild(FollowerModalPage),
  ],
})
export class FollowerModalPageModule {}
