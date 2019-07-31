import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CmediaPage } from './cmedia';
import { ComponentsModule } from '../../components/components.module'; 

@NgModule({
  declarations: [  
    CmediaPage,
  ],
  imports: [
    IonicPageModule.forChild(CmediaPage),
    ComponentsModule
  ],
})
export class CmediaPageModule {}
