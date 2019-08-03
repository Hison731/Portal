import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarijuananewsPage } from './marijuananews';
import { ComponentsModule } from '../../components/components.module'; 

@NgModule({
  declarations: [  
    MarijuananewsPage,
  ],
  imports: [
    IonicPageModule.forChild(MarijuananewsPage),
    ComponentsModule
  ],
})
export class MarijuananewsPageModule {}
