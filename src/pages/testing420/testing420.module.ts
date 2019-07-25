import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Testing420Page } from './testing420';
import { ComponentsModule } from '../../components/components.module'; 

@NgModule({
  declarations: [  
    Testing420Page,
  ],
  imports: [
    IonicPageModule.forChild(Testing420Page),
    ComponentsModule
  ],
})
export class Testing420PageModule {}
