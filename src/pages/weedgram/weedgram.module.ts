import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeedgramPage } from './weedgram';
import { ComponentsModule } from '../../components/components.module'; 

@NgModule({
  declarations: [
    WeedgramPage,
  ],
  imports: [
    IonicPageModule.forChild(WeedgramPage),
    ComponentsModule
  ],
})
export class WeedgramPageModule {}
