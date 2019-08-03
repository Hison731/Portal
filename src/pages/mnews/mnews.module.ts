import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MnewsPage } from './mnews';
import { ComponentsModule } from '../../components/components.module'; 

@NgModule({
  declarations: [  
    MnewsPage,
  ],
  imports: [
    IonicPageModule.forChild(MnewsPage),
    ComponentsModule
  ],
})
export class MnewsPageModule {}
