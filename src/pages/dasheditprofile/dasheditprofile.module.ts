import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DasheditprofilePage } from './dasheditprofile';
import { ComponentsModule } from '../../components/components.module'; 

@NgModule({
  declarations: [  
    DasheditprofilePage,
  ],
  imports: [
    IonicPageModule.forChild(DasheditprofilePage),
    ComponentsModule
  ],
})
export class DasheditprofilePageModule {}
