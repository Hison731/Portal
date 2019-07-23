import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FollowerModalPage } from './follower-modal';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [ 
    FollowerModalPage,
  ],
  imports: [
    IonicPageModule.forChild(FollowerModalPage),
    ComponentsModule
  ],
})
export class FollowerModalPageModule {}
