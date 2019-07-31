import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarijuanaPage } from './marijuana';
import { ComponentsModule } from '../../components/components.module'; 

@NgModule({
  declarations: [  
    MarijuanaPage,
  ],
  imports: [
    IonicPageModule.forChild(MarijuanaPage),
    ComponentsModule
  ],
})
export class MarijuanaPageModule {}
