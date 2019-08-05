import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DispensaryPage } from './dispensary';
import { ComponentsModule } from '../../components/components.module'; 

@NgModule({
  declarations: [  
    DispensaryPage,
  ],
  imports: [
    IonicPageModule.forChild(DispensaryPage),
    ComponentsModule
  ],
})
export class DispensaryPageModule {}
