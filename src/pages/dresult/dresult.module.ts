import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DresultPage } from './dresult';
import { ComponentsModule } from '../../components/components.module'; 

@NgModule({
  declarations: [  
    DresultPage,
  ],
  imports: [
    IonicPageModule.forChild(DresultPage),
    ComponentsModule
  ],
})
export class DresultPageModule {}
